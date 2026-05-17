/* ============================================================
   C-SERVICE BUSINESS — ULTRA STUDIO | script.js
   Full-featured: Multilingual, CMS, Auth, Particles, etc.
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {
  fr: {
    nav_home: 'Accueil',
    nav_portfolio: 'Portfolio',
    nav_academy: 'Académie',
    nav_softwares: 'Logiciels',
    nav_news: 'Actualités',
    nav_business: 'Business',
    nav_contact: 'Contact',
    hero_badge: 'Studio Premium en RDC',
    hero_title1: 'C-SERVICE BUSINESS',
    hero_title2: 'ULTRA STUDIO',
    hero_slogan: '"Transformons vos idées en œuvres cinématographiques."',
    btn_portfolio: 'Voir les réalisations',
    btn_contact: 'Nous contacter',
    btn_portfolio2: 'Télécharger portfolio',
    btn_download: 'Télécharger projet ZIP',
    typewriter: ['Vidéaste Professionnel', 'Réalisateur de Films', 'Monteur Vidéo Expert', 'Créateur Digital', 'Studio Multimédia RDC'],
    stat1: 'Projets réalisés',
    stat2: 'Clients satisfaits',
    stat3: 'Années d\'expérience',
    stat4: 'Pays couverts',
    services_tag: 'Nos Services',
    services_title: 'Ce que nous créons',
    portfolio_tag: 'Portfolio',
    portfolio_title: 'Nos Réalisations',
    all_filters: 'Tout',
    academy_tag: 'Académie',
    academy_title: 'C-Service Academy',
    software_tag: 'Logiciels',
    software_title: 'Outils de Production',
    news_tag: 'Actualités',
    news_title: 'Dernières Nouvelles',
    business_tag: 'Business',
    business_title: 'Opportunités & Services',
    testimonials_tag: 'Témoignages',
    testimonials_title: 'Ils nous font confiance',
    faq_tag: 'FAQ',
    faq_title: 'Questions Fréquentes',
    contact_tag: 'Contact',
    contact_title: 'Travaillons Ensemble',
    download_tag: 'Téléchargement',
    download_title: 'Obtenez le projet complet',
    download_desc: 'Téléchargez tous les fichiers du site (HTML, CSS, JS) prêts pour GitHub Pages et Android WebView.',
    btn_login: 'Connexion',
    btn_register: 'S\'inscrire',
    footer_copy: '© 2025 C-Service Business. Tous droits réservés.',
    form_name: 'Votre nom',
    form_email: 'Votre email',
    form_subject: 'Sujet',
    form_message: 'Votre message...',
    form_send: 'Envoyer le message',
    search_placeholder: 'Rechercher sur le site...',
  },
  en: {
    nav_home: 'Home',
    nav_portfolio: 'Portfolio',
    nav_academy: 'Academy',
    nav_softwares: 'Software',
    nav_news: 'News',
    nav_business: 'Business',
    nav_contact: 'Contact',
    hero_badge: 'Premium Studio in DRC',
    hero_title1: 'C-SERVICE BUSINESS',
    hero_title2: 'ULTRA STUDIO',
    hero_slogan: '"Let\'s transform your ideas into cinematic masterpieces."',
    btn_portfolio: 'View Projects',
    btn_contact: 'Contact Us',
    btn_portfolio2: 'Download Portfolio',
    btn_download: 'Download Project ZIP',
    typewriter: ['Professional Videographer', 'Film Director', 'Expert Video Editor', 'Digital Creator', 'Multimedia Studio DRC'],
    stat1: 'Projects Completed',
    stat2: 'Happy Clients',
    stat3: 'Years of Experience',
    stat4: 'Countries Covered',
    services_tag: 'Our Services',
    services_title: 'What We Create',
    portfolio_tag: 'Portfolio',
    portfolio_title: 'Our Realizations',
    all_filters: 'All',
    academy_tag: 'Academy',
    academy_title: 'C-Service Academy',
    software_tag: 'Software',
    software_title: 'Production Tools',
    news_tag: 'News',
    news_title: 'Latest News',
    business_tag: 'Business',
    business_title: 'Opportunities & Services',
    testimonials_tag: 'Testimonials',
    testimonials_title: 'They Trust Us',
    faq_tag: 'FAQ',
    faq_title: 'Frequently Asked Questions',
    contact_tag: 'Contact',
    contact_title: 'Let\'s Work Together',
    download_tag: 'Download',
    download_title: 'Get the Complete Project',
    download_desc: 'Download all site files (HTML, CSS, JS) ready for GitHub Pages and Android WebView.',
    btn_login: 'Login',
    btn_register: 'Register',
    footer_copy: '© 2025 C-Service Business. All rights reserved.',
    form_name: 'Your name',
    form_email: 'Your email',
    form_subject: 'Subject',
    form_message: 'Your message...',
    form_send: 'Send Message',
    search_placeholder: 'Search the site...',
  },
  sw: {
    nav_home: 'Nyumbani',
    nav_portfolio: 'Portfolio',
    nav_academy: 'Chuo',
    nav_softwares: 'Programu',
    nav_news: 'Habari',
    nav_business: 'Biashara',
    nav_contact: 'Mawasiliano',
    hero_badge: 'Studio ya Juu DRC',
    hero_title1: 'C-SERVICE BUSINESS',
    hero_title2: 'ULTRA STUDIO',
    hero_slogan: '"Tuweze kubadilisha mawazo yako kuwa kazi za sinema."',
    btn_portfolio: 'Tazama Miradi',
    btn_contact: 'Wasiliana Nasi',
    btn_portfolio2: 'Pakua Portfolio',
    btn_download: 'Pakua Mradi ZIP',
    typewriter: ['Mpiga Picha wa Kitaalamu', 'Mkurugenzi wa Filamu', 'Mhariri Video Bora', 'Mbunifu wa Kidijitali', 'Studio ya Multimedia DRC'],
    stat1: 'Miradi Iliyokamilika',
    stat2: 'Wateja Waridhika',
    stat3: 'Miaka ya Uzoefu',
    stat4: 'Nchi Zilizofikiwa',
    services_tag: 'Huduma Zetu',
    services_title: 'Tunachounda',
    portfolio_tag: 'Portfolio',
    portfolio_title: 'Kazi Zetu',
    all_filters: 'Zote',
    academy_tag: 'Chuo',
    academy_title: 'Chuo cha C-Service',
    software_tag: 'Programu',
    software_title: 'Zana za Uzalishaji',
    news_tag: 'Habari',
    news_title: 'Habari za Hivi Karibuni',
    business_tag: 'Biashara',
    business_title: 'Fursa na Huduma',
    testimonials_tag: 'Ushuhuda',
    testimonials_title: 'Wanatuamini',
    faq_tag: 'FAQ',
    faq_title: 'Maswali ya Mara kwa Mara',
    contact_tag: 'Mawasiliano',
    contact_title: 'Tufanye Kazi Pamoja',
    download_tag: 'Pakua',
    download_title: 'Pata Mradi Kamili',
    download_desc: 'Pakua faili zote (HTML, CSS, JS) tayari kwa GitHub Pages na Android WebView.',
    btn_login: 'Ingia',
    btn_register: 'Jisajili',
    footer_copy: '© 2025 C-Service Business. Haki zote zimehifadhiwa.',
    form_name: 'Jina lako',
    form_email: 'Barua pepe yako',
    form_subject: 'Mada',
    form_message: 'Ujumbe wako...',
    form_send: 'Tuma Ujumbe',
    search_placeholder: 'Tafuta kwenye tovuti...',
  }
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang = localStorage.getItem('cservice_lang') || 'fr';
let currentUser = JSON.parse(localStorage.getItem('cservice_user') || 'null');
let isAdmin = localStorage.getItem('cservice_admin') === 'true';
let isDark = localStorage.getItem('cservice_theme') !== 'light';
let currentGalleryFilter = 'all';
let currentAdminTab = 'news';
let visitCount = parseInt(localStorage.getItem('cservice_visits') || '0') + 1;
localStorage.setItem('cservice_visits', visitCount);

/* ============================================================
   DATA — Gallery, News, Business, FAQ, Testimonials
   ============================================================ */
const DEFAULT_GALLERY = [
  { id: 1, cat: 'mariage', title: 'Mariage Royal Kinshasa', desc: 'Cérémonie somptueuse au Fleuve Congo Hotel', icon: '💍', type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, cat: 'clip', title: 'Clip Officiel "Mapambano"', desc: 'Production musicale cinéma 4K ultra HD', icon: '🎵', type: 'video', url: '' },
  { id: 3, cat: 'eglise', title: 'Culte Cathédrale Notre-Dame', desc: 'Diffusion live multi-caméras professionnelle', icon: '⛪', type: 'video', url: '' },
  { id: 4, cat: 'pub', title: 'Publicité Vodacom RDC', desc: 'Spot publicitaire 30 secondes TVC', icon: '📱', type: 'video', url: '' },
  { id: 5, cat: 'business', title: 'Corporate BCC', desc: 'Film institutionnel Banque Centrale Congo', icon: '🏛️', type: 'video', url: '' },
  { id: 6, cat: 'doc', title: 'Documentaire Kasaï', desc: 'Exploration culturelle province du Kasaï', icon: '🎬', type: 'video', url: '' },
  { id: 7, cat: 'mariage', title: 'Mariage Traditionnel Luba', desc: 'Cérémonie authentique et moderne', icon: '💒', type: 'video', url: '' },
  { id: 8, cat: 'clip', title: 'Clip Rumba Moderne', desc: 'Production vidéo soukous contemporain', icon: '🎸', type: 'video', url: '' },
  { id: 9, cat: 'pub', title: 'Spot Radio-Okapi', desc: 'Campagne nationale sensibilisation', icon: '📻', type: 'video', url: '' },
];

const DEFAULT_NEWS = [
  { id: 1, cat: 'Studio', title: 'C-Service ouvre son nouveau studio 4K à Kinshasa', desc: 'Un équipement de pointe pour des productions cinéma au niveau international.', date: '15 Mai 2025', icon: '🎬' },
  { id: 2, cat: 'Formation', title: 'Nouvelle session Académie — Montage Pro', desc: 'Inscriptions ouvertes pour la formation montage vidéo professionnelle.', date: '10 Mai 2025', icon: '🎓' },
  { id: 3, cat: 'Award', title: 'C-Service remporte le Prix Excellence 2025', desc: 'Reconnu meilleur studio multimédia de la RDC par le jury national.', date: '1 Mai 2025', icon: '🏆' },
];

const DEFAULT_BUSINESS = [
  { id: 1, title: 'Pack Mariage Complet', desc: 'Couverture intégrale — 2 caméras, drone, montage cinéma, livraison 4K.', price: '350$', icon: '💍' },
  { id: 2, title: 'Spot Publicitaire 30s', desc: 'Production spot TVC qualité broadcast — scénario, tournage, post-prod.', price: '200$', icon: '📺' },
  { id: 3, title: 'Pack Live Streaming', desc: 'Multi-caméras, encodage pro, diffusion YouTube/Facebook simultanée.', price: '150$', icon: '📡' },
  { id: 4, title: 'Formation Individuelle', desc: 'Cours privé montage vidéo, 10 heures intensives avec certification.', price: '80$', icon: '🎓' },
  { id: 5, title: 'Clip Musical Cinéma', desc: 'Production clip artistique full HD — casting, décors, effets visuels.', price: '500$', icon: '🎵' },
  { id: 6, title: 'Film Corporate', desc: 'Film institutionnel d\'entreprise — interview, B-roll, motion design.', price: '300$', icon: '🏢' },
];

const FAQS = [
  { q: 'Quelles sont vos zones d\'intervention ?', a: 'C-Service Business intervient principalement à Kinshasa et dans toutes les provinces de la RDC. Nous pouvons également intervenir dans les pays voisins sur demande spéciale.' },
  { q: 'Quels formats de livraison proposez-vous ?', a: 'Nous livrons en formats 4K Ultra HD, Full HD 1080p, et HD 720p selon vos besoins. Les fichiers sont fournis en MP4 H.264/H.265, optimisés pour YouTube, Facebook, ou diffusion broadcast.' },
  { q: 'Combien de temps pour la livraison d\'un projet ?', a: 'Les délais varient selon la complexité : mariage (5-7 jours), clip musical (10-14 jours), corporate (7-10 jours). Des livraisons express sont disponibles avec supplément.' },
  { q: 'Proposez-vous des formations à distance ?', a: 'Oui, nous proposons des formations en ligne via Zoom et WhatsApp. Contactez-nous pour les modalités et disponibilités. Les cours en présentiel sont aussi disponibles à Kinshasa.' },
  { q: 'Comment réserver nos services ?', a: 'Contactez-nous via WhatsApp au +243 850406200 ou par email. Un acompte de 30% est demandé à la réservation pour confirmer votre date.' },
  { q: 'Proposez-vous des tarifs réduits pour ONG ?', a: 'Oui, C-Service Business propose des tarifs préférentiels pour les ONG, organisations humanitaires et institutions éducatives. Contactez-nous pour un devis personnalisé.' },
];

const TESTIMONIALS = [
  { name: 'Pastor Emmanuel K.', role: 'Église de la Grâce, Kinshasa', text: 'C-Service a transformé nos cultes. La qualité de diffusion est exceptionnelle — nos fidèles à l\'étranger peuvent suivre comme s\'ils étaient présents. Merci Cianney!', stars: 5, init: 'E' },
  { name: 'Marie-Claire B.', role: 'Mariée, Juillet 2024', text: 'Notre mariage est immortalisé de façon magnifique. Chaque image est cinéma. Je pleure de joie à chaque visionnage. Je recommande C-Service à 1000%.', stars: 5, init: 'M' },
  { name: 'Directeur Artistique TéléKin', role: 'Télévision Nationale', text: 'Qualité broadcast professionnelle, respect des délais, équipe très compétente. C-Service est notre partenaire de confiance pour tous nos projets vidéo.', stars: 5, init: 'T' },
  { name: 'Bijou A.', role: 'Artiste Musicale', text: 'Mon clip a fait plus de 500K vues en 2 semaines. La réalisation est digne des clips internationaux. Cianney comprend la vision artistique parfaitement.', stars: 5, init: 'B' },
  { name: 'Dr. Kabila N.', role: 'Directeur OCHA DRC', text: 'Film institutionnel de très haute qualité. L\'équipe C-Service a capté l\'essence de notre mission humanitaire avec sensibilité et professionnalisme remarquable.', stars: 5, init: 'K' },
  { name: 'Fatuma M.', role: 'Étudiante Académie C-Service', text: 'La formation montage m\'a ouvert les portes de l\'industrie. En 3 mois j\'ai décroché mon premier contrat professionnel. Cianney est un excellent formateur!', stars: 5, init: 'F' },
];

/* ============================================================
   PARTICLES SYSTEM
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.offsetWidth, H = canvas.offsetHeight;
  canvas.width = W; canvas.height = H;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 0.5,
    alpha: Math.random() * 0.6 + 0.2,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
      ctx.fill();
    });
    // Draw connections
    particles.forEach((p, i) => {
      particles.slice(i + 1).forEach(q => {
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,212,255,${0.12 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W; canvas.height = H;
  });
}

/* ============================================================
   TYPEWRITER
   ============================================================ */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;
  const words = TRANSLATIONS[currentLang].typewriter;
  let wIdx = 0, cIdx = 0, deleting = false;

  function tick() {
    const word = words[wIdx];
    if (deleting) {
      el.textContent = word.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; setTimeout(tick, 400); return; }
    } else {
      el.textContent = word.slice(0, ++cIdx);
      if (cIdx === word.length) { deleting = true; setTimeout(tick, 2200); return; }
    }
    setTimeout(tick, deleting ? 50 : 80);
  }
  tick();
}

/* ============================================================
   LOADER
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 2400);
});

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    // Back to top
    const fab = document.getElementById('fab-back');
    if (fab) { window.scrollY > 400 ? fab.classList.add('visible') : fab.classList.remove('visible'); }
  });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }
  // Close menu on link click
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('cservice_lang', lang);
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update typewriter words
  const twEl = document.getElementById('typewriter-text');
  if (twEl) twEl.textContent = '';
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(currentLang);
}

/* ============================================================
   THEME
   ============================================================ */
function initTheme() {
  const btn = document.getElementById('theme-btn');
  function applyTheme() {
    document.body.classList.toggle('light-mode', !isDark);
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
  }
  applyTheme();
  if (btn) {
    btn.addEventListener('click', () => {
      isDark = !isDark;
      localStorage.setItem('cservice_theme', isDark ? 'dark' : 'light');
      applyTheme();
    });
  }
}

/* ============================================================
   STATS COUNTER
   ============================================================ */
function initStats() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;
  let counted = false;
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 80);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + (el.dataset.suffix || '');
          if (current >= target) clearInterval(timer);
        }, 20);
      });
    }
  }, { threshold: 0.5 });
  observer.observe(statsSection);
}

/* ============================================================
   GALLERY
   ============================================================ */
function getGalleryItems() {
  const stored = JSON.parse(localStorage.getItem('cservice_gallery') || '[]');
  return [...DEFAULT_GALLERY, ...stored];
}

function renderGallery(filter) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  const items = getGalleryItems().filter(i => filter === 'all' || i.cat === filter);
  grid.innerHTML = items.map(item => `
    <div class="gallery-item reveal" data-cat="${item.cat}" onclick="openVideoModal('${item.url || ''}', '${escHtml(item.title)}', '${escHtml(item.desc)}')">
      <div class="gallery-thumb">
        <div class="gallery-thumb-inner">${item.icon || '🎬'}</div>
        <div class="play-overlay">
          <div class="play-btn-circle">▶</div>
        </div>
      </div>
      <div class="gallery-info">
        <div class="gallery-cat">${item.cat.toUpperCase()}</div>
        <h4>${escHtml(item.title)}</h4>
        <p>${escHtml(item.desc)}</p>
      </div>
    </div>
  `).join('');
  revealObserver();
}

function initGallery() {
  renderGallery('all');
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGalleryFilter = btn.dataset.filter;
      renderGallery(currentGalleryFilter);
    });
  });
}

function openVideoModal(url, title, desc) {
  const modal = document.getElementById('video-modal');
  if (!modal) return;
  const videoWrap = document.getElementById('modal-video-content');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  if (modalTitle) modalTitle.textContent = title;
  if (modalDesc) modalDesc.textContent = desc;
  if (videoWrap) {
    if (url && url.includes('youtube')) {
      videoWrap.innerHTML = `<iframe src="${url}?autoplay=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>`;
    } else if (url && url.includes('.mp4')) {
      videoWrap.innerHTML = `<video src="${url}" autoplay controls></video>`;
    } else {
      videoWrap.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;color:#8a8a9a;font-size:0.9rem;background:#0a0a0f;border-radius:16px 16px 0 0"><span style="font-size:4rem">🎬</span><p>${title}</p><p style="font-size:0.8rem">Vidéo disponible sur commande</p></div>`;
    }
  }
  modal.classList.add('open');
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.classList.remove('open');
    const v = document.getElementById('modal-video-content');
    if (v) v.innerHTML = '';
  }
}

/* ============================================================
   NEWS
   ============================================================ */
function getNews() {
  const stored = JSON.parse(localStorage.getItem('cservice_news') || '[]');
  return [...DEFAULT_NEWS, ...stored];
}

function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = getNews().map(item => `
    <div class="news-card reveal">
      <div class="news-img">${item.img ? `<img src="${item.img}" alt="${escHtml(item.title)}" style="width:100%;height:100%;object-fit:cover">` : `<span>${item.icon || '📰'}</span>`}</div>
      <div class="news-body">
        <div class="news-meta">
          <span class="news-cat-tag">${escHtml(item.cat || 'Actualité')}</span>
          <span class="news-date">${escHtml(item.date || '')}</span>
        </div>
        <h4>${escHtml(item.title)}</h4>
        <p>${escHtml(item.desc)}</p>
      </div>
    </div>
  `).join('');
  revealObserver();
}

function renderTicker() {
  const ticker = document.getElementById('ticker-content');
  if (!ticker) return;
  const items = getNews().map(n => n.title).join(' ● ');
  ticker.innerHTML = `<span>${items}</span><span>${items}</span>`;
}

/* ============================================================
   BUSINESS
   ============================================================ */
function getBusiness() {
  const stored = JSON.parse(localStorage.getItem('cservice_business') || '[]');
  return [...DEFAULT_BUSINESS, ...stored];
}

function renderBusiness() {
  const grid = document.getElementById('business-grid');
  if (!grid) return;
  grid.innerHTML = getBusiness().map(item => `
    <div class="business-card reveal">
      <div class="business-img">${item.img ? `<img src="${item.img}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<span>${item.icon || '💼'}</span>`}</div>
      <div class="business-body">
        <div class="business-price">${escHtml(item.price || 'Sur devis')}</div>
        <h4>${escHtml(item.title)}</h4>
        <p>${escHtml(item.desc)}</p>
        <a href="https://wa.me/243850406200?text=Je%20suis%20intéressé%20par%20${encodeURIComponent(item.title)}" target="_blank" class="btn-whatsapp">
          <span>📱</span> Contacter sur WhatsApp
        </a>
      </div>
    </div>
  `).join('');
  revealObserver();
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card reveal">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
      <p>"${escHtml(t.text)}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.init}</div>
        <div>
          <h5>${escHtml(t.name)}</h5>
          <span>${escHtml(t.role)}</span>
        </div>
      </div>
    </div>
  `).join('');
  revealObserver();
}

/* ============================================================
   FAQ
   ============================================================ */
function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${escHtml(faq.q)}</span>
        <div class="faq-arrow">▼</div>
      </div>
      <div class="faq-a"><p>${escHtml(faq.a)}</p></div>
    </div>
  `).join('');
}

function toggleFAQ(idx) {
  const item = document.getElementById(`faq-${idx}`);
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ============================================================
   ADMIN CMS
   ============================================================ */
function openAdmin() {
  document.getElementById('admin-panel').classList.add('open');
  document.getElementById('panel-overlay').classList.add('open');
  renderPublished();
}

function closeAdmin() {
  document.getElementById('admin-panel').classList.remove('open');
  document.getElementById('panel-overlay').classList.remove('open');
}

function switchAdminTab(tab) {
  currentAdminTab = tab;
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  renderPublished();
}

function renderPublished() {
  const list = document.getElementById('published-list');
  if (!list) return;
  const key = `cservice_${currentAdminTab}`;
  const items = JSON.parse(localStorage.getItem(key) || '[]');
  if (items.length === 0) {
    list.innerHTML = '<p style="font-size:0.82rem;color:var(--color-gray);text-align:center;padding:20px">Aucune publication</p>';
    return;
  }
  list.innerHTML = items.map((item, i) => `
    <div class="published-item">
      <div class="published-item-info">
        <h5>${escHtml(item.title)}</h5>
        <span>${item.date || ''} · ${item.cat || currentAdminTab}</span>
      </div>
      <div class="published-item-actions">
        <button class="action-btn del" onclick="deletePublished('${key}', ${i})" title="Supprimer">🗑</button>
      </div>
    </div>
  `).join('');
}

function deletePublished(key, idx) {
  const items = JSON.parse(localStorage.getItem(key) || '[]');
  items.splice(idx, 1);
  localStorage.setItem(key, JSON.stringify(items));
  renderPublished();
  renderNews(); renderBusiness(); renderGallery(currentGalleryFilter);
  notify('Publication supprimée', 'info');
}

function publishContent(e) {
  e.preventDefault();
  const form = document.getElementById('admin-form');
  const title = form.querySelector('#pub-title').value.trim();
  const desc = form.querySelector('#pub-desc').value.trim();
  const cat = form.querySelector('#pub-cat').value;
  const img = form.querySelector('#pub-img').value.trim();
  const price = form.querySelector('#pub-price') ? form.querySelector('#pub-price').value.trim() : '';
  const url = form.querySelector('#pub-url') ? form.querySelector('#pub-url').value.trim() : '';

  if (!title) { notify('Le titre est requis', 'error'); return; }

  const item = {
    id: Date.now(), title, desc, cat, img, price, url,
    date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
    icon: '📌'
  };

  const key = `cservice_${currentAdminTab}`;
  const items = JSON.parse(localStorage.getItem(key) || '[]');
  items.unshift(item);
  localStorage.setItem(key, JSON.stringify(items));

  form.reset();
  renderPublished();
  renderNews(); renderBusiness(); renderGallery(currentGalleryFilter); renderTicker();
  notify('Publication ajoutée avec succès !', 'success');
}

/* ============================================================
   AUTH SYSTEM
   ============================================================ */
function openAuth() {
  document.getElementById('auth-modal').classList.add('open');
}

function closeAuth() {
  document.getElementById('auth-modal').classList.remove('open');
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('auth-login').style.display = tab === 'login' ? 'flex' : 'none';
  document.getElementById('auth-register').style.display = tab === 'register' ? 'flex' : 'none';
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) { notify('Remplissez tous les champs', 'error'); return; }
  const users = JSON.parse(localStorage.getItem('cservice_users') || '[]');
  const user = users.find(u => u.email === email && u.pass === btoa(pass));
  if (!user) { notify('Email ou mot de passe incorrect', 'error'); return; }
  currentUser = { name: user.name, email: user.email };
  localStorage.setItem('cservice_user', JSON.stringify(currentUser));
  closeAuth();
  updateAuthUI();
  notify(`Bienvenue, ${user.name} !`, 'success');
  if (email === 'admin@cservice.cd') {
    isAdmin = true;
    localStorage.setItem('cservice_admin', 'true');
    document.getElementById('fab-admin').style.display = 'flex';
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  if (!name || !email || !pass) { notify('Remplissez tous les champs', 'error'); return; }
  const users = JSON.parse(localStorage.getItem('cservice_users') || '[]');
  if (users.find(u => u.email === email)) { notify('Email déjà utilisé', 'error'); return; }
  users.push({ name, email, pass: btoa(pass) });
  localStorage.setItem('cservice_users', JSON.stringify(users));
  currentUser = { name, email };
  localStorage.setItem('cservice_user', JSON.stringify(currentUser));
  closeAuth();
  updateAuthUI();
  notify(`Compte créé ! Bienvenue, ${name} !`, 'success');
}

function handleLogout() {
  currentUser = null; isAdmin = false;
  localStorage.removeItem('cservice_user');
  localStorage.removeItem('cservice_admin');
  updateAuthUI();
  notify('Déconnecté avec succès', 'info');
  const fab = document.getElementById('fab-admin');
  if (fab) fab.style.display = 'none';
}

function updateAuthUI() {
  const btnLogin = document.getElementById('btn-login');
  const btnReg = document.getElementById('btn-register');
  const btnLogout = document.getElementById('btn-logout');
  const userInfo = document.getElementById('user-info');
  if (currentUser) {
    if (btnLogin) btnLogin.style.display = 'none';
    if (btnReg) btnReg.style.display = 'none';
    if (btnLogout) btnLogout.style.display = 'flex';
    if (userInfo) { userInfo.style.display = 'flex'; userInfo.textContent = currentUser.name[0].toUpperCase(); }
  } else {
    if (btnLogin) btnLogin.style.display = 'flex';
    if (btnReg) btnReg.style.display = 'flex';
    if (btnLogout) btnLogout.style.display = 'none';
    if (userInfo) userInfo.style.display = 'none';
  }
}

/* ============================================================
   SEARCH
   ============================================================ */
function openSearch() {
  document.getElementById('search-bar').classList.add('open');
  document.getElementById('search-input').focus();
}

function closeSearch() {
  document.getElementById('search-bar').classList.remove('open');
}

function handleSearch(e) {
  if (e.key === 'Escape') closeSearch();
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  if (!name || !email || !message) { notify('Remplissez tous les champs requis', 'error'); return; }
  // Build WhatsApp message
  const waText = `Bonjour Cianney !\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`;
  window.open(`https://wa.me/243850406200?text=${encodeURIComponent(waText)}`, '_blank');
  notify('Message prêt — vous allez être redirigé vers WhatsApp', 'success');
  e.target.reset();
}

/* ============================================================
   NOTIFICATIONS
   ============================================================ */
function notify(msg, type = 'info') {
  const container = document.getElementById('notif-container');
  if (!container) return;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const n = document.createElement('div');
  n.className = `notif ${type}`;
  n.innerHTML = `<span class="notif-icon">${icons[type]}</span><p>${msg}</p><span class="notif-close" onclick="this.parentElement.remove()">✕</span>`;
  container.appendChild(n);
  setTimeout(() => n.remove(), 4500);
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function revealObserver() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ============================================================
   DOWNLOAD ZIP — JSZip (works on GitHub Pages, no server needed)
   ============================================================ */
async function downloadZIP() {
  notify('Préparation du ZIP...', 'info');
  try {
    const [cssResp, jsResp] = await Promise.all([fetch('style.css'), fetch('script.js')]);
    const cssText = await cssResp.text();
    const jsText = await jsResp.text();
    const html = document.documentElement.outerHTML;

    if (typeof JSZip === 'undefined') {
      notify('JSZip non disponible. Téléchargement HTML uniquement.', 'info');
      downloadFile('index.html', html, 'text/html'); return;
    }
    const zip = new JSZip();
    const root = zip.folder('c-service-studio');
    root.file('index.html', html);
    root.file('style.css', cssText);
    root.file('script.js', jsText);
    root.folder('assets').file('.gitkeep', '');
    root.folder('images').file('.gitkeep', '');
    root.folder('videos').file('.gitkeep', '');
    root.folder('admin').file('.gitkeep', '');
    root.folder('data').file('content.json', JSON.stringify({
      site: { name: 'C-SERVICE BUSINESS — ULTRA STUDIO', owner: 'Cianney', whatsapp: '+243850406200', email: 'Cianney029@gmail.com', location: 'Kinshasa, RDC' }
    }, null, 2));

    const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 9 } });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'c-service-studio.zip';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => notify('✅ ZIP téléchargé — Projet complet prêt pour GitHub !', 'success'), 800);
  } catch (err) {
    console.error(err);
    notify('Erreur ZIP. Réessayez.', 'error');
  }
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
}

function generateREADME() {
  return `# C-SERVICE BUSINESS — ULTRA STUDIO

Site web ultra premium de vidéaste et studio multimédia en RDC.

## Propriétaire
Cianney
WhatsApp: +243 850406200
Email: Cianney029@gmail.com

## Comment publier sur GitHub Pages

1. Créer un repository GitHub
2. Uploader tous les fichiers
3. Aller dans Settings > Pages
4. Sélectionner la branche main et le dossier root
5. Votre site sera en ligne en quelques minutes

## Structure
- index.html — Page principale
- style.css — Styles CSS
- script.js — JavaScript
- assets/ — Ressources générales
- images/ — Images
- videos/ — Vidéos locales
- admin/ — Panneau admin
- data/ — Données JSON

## Android WebView
Ouvrir le fichier index.html dans un WebView Android.
Compatible avec les navigateurs modernes.

## Contact
WhatsApp: +243 850406200
Email: Cianney029@gmail.com
`;
}

/* ============================================================
   VISITOR COUNTER
   ============================================================ */
function updateVisitorCounter() {
  const el = document.getElementById('visitor-count');
  if (el) el.textContent = (visitCount + 1247).toLocaleString();
}

/* ============================================================
   UTILITY
   ============================================================ */
function escHtml(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   SMOOTH SCROLL FOR ANCHORS
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ============================================================
   INIT ALL
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  initParticles();
  initNavbar();
  initLang();
  initTheme();
  initStats();
  initGallery();
  renderNews();
  renderTicker();
  renderBusiness();
  renderTestimonials();
  renderFAQ();
  updateAuthUI();
  updateVisitorCounter();
  revealObserver();
  initSmoothScroll();
  initTypewriter();

  // Auth modal events
  const loginForm = document.getElementById('login-form');
  const regForm = document.getElementById('register-form');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
  if (regForm) regForm.addEventListener('submit', handleRegister);

  const adminForm = document.getElementById('admin-form');
  if (adminForm) adminForm.addEventListener('submit', publishContent);

  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleContact);

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.addEventListener('keydown', handleSearch);

  // Show admin fab if admin
  const fabAdmin = document.getElementById('fab-admin');
  if (fabAdmin) fabAdmin.style.display = isAdmin ? 'flex' : 'none';

  // Live notification
  setTimeout(() => notify('🎬 Bienvenue sur C-Service Business Ultra Studio !', 'info'), 3000);
  setTimeout(() => notify('📱 Contactez-nous sur WhatsApp : +243 850406200', 'success'), 7000);
});
