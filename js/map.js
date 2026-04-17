/* ============================================================
   ONG VAPES — Carte Leaflet + OpenStreetMap
   Affiche les 5 antennes + le siège de Coyah sur une vraie carte
   ============================================================ */
(function () {
  'use strict';

  function init() {
    const container = document.getElementById('vapes-map');
    if (!container || typeof L === 'undefined') return;

    // Coordonnées GPS approximatives des antennes + siège
    const locations = [
      { id: 'coyah',     name: 'Coyah (Siège)',   coords: [9.7085, -13.3848], hq: true,
        desc: 'Sanoyah, Km 36 · Région de Kindia' },
      { id: 'conakry',   name: 'Conakry',         coords: [9.6412, -13.5784], hq: false,
        desc: 'Capitale · Basse-Guinée' },
      { id: 'labe',      name: 'Labé',            coords: [11.3182, -12.2833], hq: false,
        desc: 'Fouta-Djalon · Moyenne-Guinée' },
      { id: 'faranah',   name: 'Faranah',         coords: [10.0402, -10.7470], hq: false,
        desc: 'Haute-Guinée · zone prioritaire' },
      { id: 'kankan',    name: 'Kankan',          coords: [10.3854, -9.3062],  hq: false,
        desc: 'Haute-Guinée · plus grande ville' },
      { id: 'nzerekore', name: "N'Zérékoré",      coords: [7.7559, -8.8187],   hq: false,
        desc: 'Guinée forestière' }
    ];

    // Initialiser la carte centrée sur la Guinée
    const map = L.map(container, {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true
    }).setView([10.4, -11.0], 6);

    // Tuiles CartoDB Voyager (esthétique plus éditoriale que OSM brut)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
      crossOrigin: true
    }).addTo(map);

    // Icônes personnalisées : or pour siège, corail pour antennes
    const makeIcon = (color) => L.divIcon({
      className: 'vapes-marker',
      html: `<span style="
        display:block;
        width:24px; height:24px;
        border-radius:50%;
        background:${color};
        border:3px solid #fff;
        box-shadow:0 2px 8px rgba(0,0,0,0.35);
        transform:translate(-12px,-12px);
      "></span>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const hqIcon = makeIcon('#F5C23E');
    const branchIcon = makeIcon('#E15B4C');

    const bounds = [];
    locations.forEach(loc => {
      const marker = L.marker(loc.coords, {
        icon: loc.hq ? hqIcon : branchIcon,
        title: loc.name
      }).addTo(map);

      marker.bindPopup(`
        <div style="font-family:Inter,sans-serif; min-width:180px">
          <h4 style="margin:0 0 4px; color:${loc.hq ? '#B8891D' : '#0A4522'}; font-family:Fraunces,serif; font-size:15px">${loc.name}</h4>
          <p style="margin:0; color:#4F5D54; font-size:13px">${loc.desc}</p>
        </div>
      `);

      // Sync avec cartes HTML
      const card = document.querySelector(`.map-antenna[data-name="${loc.id}"]`);
      if (card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
          map.flyTo(loc.coords, 9, { duration: 0.8 });
          marker.openPopup();
        });
        marker.on('click', () => {
          card.style.borderColor = 'var(--gold-500)';
          setTimeout(() => { card.style.borderColor = ''; }, 2000);
        });
      }

      bounds.push(loc.coords);
    });

    // Ajuster la vue pour inclure tous les marqueurs
    map.fitBounds(bounds, { padding: [40, 40] });

    // Activer scroll-wheel après clic dans la carte (évite le scroll bloqué)
    container.addEventListener('click', () => {
      map.scrollWheelZoom.enable();
    });
    map.on('mouseout', () => {
      map.scrollWheelZoom.disable();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
