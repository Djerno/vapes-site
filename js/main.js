/* ================================================================
   ONG VAPES — JS principal
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* ---------- Header shadow on scroll ---------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Hero slider ---------- */
  const heroMedia = document.querySelector('.hero-media img');
  const dots = document.querySelectorAll('.hero-slider-dots span');
  if (heroMedia && dots.length) {
    const slides = Array.from(dots).map(d => d.dataset.img).filter(Boolean);
    if (slides.length) {
      let i = 0;
      let timer;
      const show = (n) => {
        i = (n + slides.length) % slides.length;
        heroMedia.style.opacity = '0';
        setTimeout(() => {
          heroMedia.src = slides[i];
          heroMedia.style.opacity = '1';
        }, 200);
        dots.forEach((d, k) => d.classList.toggle('active', k === i));
      };
      const auto = () => { clearInterval(timer); timer = setInterval(() => show(i + 1), 6500); };
      heroMedia.style.transition = 'opacity 0.5s ease';
      show(0);
      auto();
      dots.forEach((d, k) => d.addEventListener('click', () => { show(k); auto(); }));
    }
  }

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const decimals = (el.dataset.counter.split('.')[1] || '').length;
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        const cur = target * eased;
        el.textContent = (decimals ? cur.toFixed(decimals) : Math.round(cur).toLocaleString('fr-FR')) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterIO.observe(c));

  /* ---------- Lightbox ---------- */
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const img =