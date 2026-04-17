/* ================================================================
   ONG VAPES — Durcissement sécurité côté client
   Honeypot, validation forms, anti-clickjacking, sanitization
   ================================================================ */

(function () {
  'use strict';

  /* -------- 1. Frame-busting (anti-clickjacking si CSP échoue) -------- */
  if (window.top !== window.self) {
    try {
      window.top.location = window.self.location;
    } catch (e) {
      document.body.style.display = 'none';
      document.documentElement.innerHTML = '<p>Ce site ne peut pas être chargé dans un iframe pour des raisons de sécurité.</p>';
    }
  }

  /* -------- 2. Sanitization helper (strip HTML/scripts) -------- */
  const sanitize = (str) => {
    if (typeof str !== 'string') return '';
    return str
      .replace(/[<>]/g, '')                       // < and >
      .replace(/javascript:/gi, '')                // javascript: URI
      .replace(/on\w+\s*=/gi, '')                  // on* event handlers
      .replace(/data:text\/html/gi, '')            // data URI html
      .trim();
  };

  /* -------- 3. Email validation (RFC 5322 simplified) -------- */
  const isValidEmail = (email) => {
    if (!email || email.length > 254) return false;
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  /* -------- 4. Rate limiting via localStorage -------- */
  const MAX_SUBMITS = 3;          // max 3 submits
  const WINDOW_MS = 60 * 1000;    // per minute
  const rateLimit = () => {
    try {
      const key = 'vapes-submits';
      const now = Date.now();
      const data = JSON.parse(localStorage.getItem(key) || '[]')
        .filter(t => now - t < WINDOW_MS);
      if (data.length >= MAX_SUBMITS) return false;
      data.push(now);
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) { return true; }
  };

  /* -------- 5. Honeypot + upgrade to every form -------- */
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
      // Honeypot — invisible, bots will fill it
      const hp = document.createElement('div');
      hp.style.cssText = 'position:absolute; left:-9999px; top:-9999px; opacity:0; pointer-events:none; height:0; overflow:hidden;';
      hp.setAttribute('aria-hidden', 'true');
      hp.innerHTML = `
        <label for="website">Laissez ce champ vide</label>
        <input type="text" name="website" id="website" tabindex="-1" autocomplete="off">
      `;
      form.appendChild(hp);

      // Timestamp check — too fast = bot
      const ts = document.createElement('input');
      ts.type = 'hidden';
      ts.name = 'vapes_ts';
      ts.value = Date.now();
      form.appendChild(ts);

      // Noscript safeguard token
      const token = document.createElement('input');
      token.type = 'hidden';
      token.name = 'vapes_token';
      // Simple client-generated token (not a CSRF token — real CSRF needs backend)
      token.value = [...crypto.getRandomValues(new Uint8Array(16))]
        .map(b => b.toString(16).padStart(2, '0')).join('');
      form.appendChild(token);

      // autocomplete hardening
      form.setAttribute('novalidate', 'novalidate'); // we handle validation
      form.querySelectorAll('input[type="email"]').forEach(i => {
        i.setAttribute('autocomplete', 'email');
        i.setAttribute('inputmode', 'email');
        i.setAttribute('maxlength', '254');
      });
      form.querySelectorAll('input[type="text"]').forEach(i => {
        if (!i.hasAttribute('autocomplete')) i.setAttribute('autocomplete', 'off');
        if (!i.hasAttribute('maxlength')) i.setAttribute('maxlength', '200');
      });
      form.querySelectorAll('textarea').forEach(t => {
        if (!t.hasAttribute('maxlength')) t.setAttribute('maxlength', '5000');
      });
      form.querySelectorAll('input[type="tel"]').forEach(i => {
        i.setAttribute('autocomplete', 'tel');
        i.setAttribute('inputmode', 'tel');
        i.setAttribute('pattern', '[+0-9\\s()\\-]{6,20}');
        i.setAttribute('maxlength', '20');
      });
    });

    /* -------- 6. Intercept form submissions for validation -------- */
    document.querySelectorAll('form[data-demo]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const msg = form.querySelector('.form-msg') || (() => {
          const p = document.createElement('p');
          p.className = 'form-msg';
          form.appendChild(p);
          return p;
        })();

        const showErr = (text) => {
          msg.textContent = '⚠ ' + text;
          msg.style.color = '#C64B3E';
          msg.style.fontWeight = '600';
          msg.style.marginTop = '12px';
        };
        const showOk = (text) => {
          msg.textContent = text;
          msg.style.color = '#1F7A3C';
          msg.style.fontWeight = '600';
          msg.style.marginTop = '12px';
        };

        // 1. Honeypot check
        const hp = form.querySelector('input[name="website"]');
        if (hp && hp.value) {
          // Silently drop — bot detected. Show fake success to not alert them.
          showOk('✓ Merci !');
          form.reset();
          return;
        }

        // 2. Submit timing check (min 2 seconds since form load)
        const ts = form.querySelector('input[name="vapes_ts"]');
        if (ts) {
          const elapsed = Date.now() - parseInt(ts.value, 10);
          if (elapsed < 2000) {
            showErr('Envoi trop rapide — réessayez dans un instant.');
            return;
          }
        }

        // 3. Rate limit
        if (!rateLimit()) {
          showErr('Trop d\'envois successifs. Réessayez dans une minute.');
          return;
        }

        // 4. Required fields
        const required = form.querySelectorAll('[required]');
        for (const field of required) {
          if (!field.value || field.value.trim() === '') {
            showErr('Merci de remplir tous les champs obligatoires.');
            field.focus();
            return;
          }
        }

        // 5. Email validation
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && !isValidEmail(emailField.value)) {
          showErr('Adresse email invalide.');
          emailField.focus();
          return;
        }

        // 6. Sanitize all text inputs (defense in depth)
        form.querySelectorAll('input[type="text"], textarea, input[type="email"], input[type="tel"]').forEach(f => {
          const cleaned = sanitize(f.value);
          if (cleaned !== f.value) f.value = cleaned;
        });

        // 7. Content check (anti-spam heuristics)
        const textarea = form.querySelector('textarea');
        if (textarea) {
          const text = textarea.value.toLowerCase();
          // Typical spam signals
          const spamSignals = ['http://', 'https://', 'www.', '.com/', '.ru/', '.cn/',
                                'crypto', 'bitcoin', 'viagra', 'casino', 'porn', 'xxx',
                                'click here', 'buy now', 'free offer', 'replica watch'];
          const hits = spamSignals.filter(s => text.includes(s)).length;
          if (hits >= 2) {
            showOk('✓ Merci !');
            form.reset();
            return;
          }
        }

        // Success — replace with real backend submission in production
        showOk('✓ Merci ! Nous vous répondrons dans les 48 heures.');
        form.reset();
        setTimeout(() => { msg.textContent = ''; }, 8000);
      });
    });
  });

  /* -------- 7. Warn if opened via file:// on non-local machine -------- */
  if (location.protocol === 'file:' && !/localhost|127\.0\.0\.1/.test(location.hostname)) {
    console.info('[VAPES] Ouvert en local (file://). Pour la production, déployer sur HTTPS.');
  }

  /* -------- 8. Block drag-and-drop file on body (accidental exfil) -------- */
  ['dragover', 'drop'].forEach(ev => {
    window.addEventListener(ev, e => { e.preventDefault(); }, false);
  });

  /* -------- 9. Disable right-click on images (soft protection — can be bypassed) -------- */
  // Déjà : le vrai contrôle est légal (copyright). On ne fait pas de "disable right-click"
  // car c'est anti-accessibilité. Les images sont protégées par droit d'auteur.

  /* -------- 10. Expose sanitize helper globally for other scripts -------- */
  window.VAPES_security = { sanitize, isValidEmail };
})();
