/* Yan Yupanqui — comportamiento del sitio.
   Tres cosas y nada más: menú móvil, animación de entrada y cambio de idioma.
   El español vive en el HTML; aquí solo se guarda una copia y las cadenas en inglés. */

(function () {
  'use strict';

  /* ---------- menú móvil ---------- */

  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function closeMenu() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navLinks.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
  }

  /* ---------- animación de entrada ---------- */

  var reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- idioma ---------- */

  var EN = {
    'skip': 'Skip to main content',
    'nav.models': 'Models',
    'nav.services': 'Services',
    'nav.promise': 'Promise',
    'nav.contact': 'Contact',

    'hero.kicker': 'Web design · Lima, Peru',
    'hero.title': 'Fewer elements.<br />More clarity.<br />A website your customers understand in five seconds.',
    'hero.lede': 'I design quiet, fast websites for businesses that want to look serious. Below you can see real models of how yours would look.',
    'hero.cta': 'See page models',
    'hero.portfolio': 'Portfolio 2026',

    'band.caption': 'Every project is written by hand, no templates.',

    'models.title': 'Page models',
    'models.meta': 'Pick the one that looks like your business',
    'model.1.title': 'Restaurant and café',
    'model.1.body': 'A menu visible without downloading anything, location and WhatsApp orders at first glance.',
    'model.2.title': 'Clinic and practice',
    'model.2.body': 'Trust first: clear specialties, opening hours and a booking button that never gets lost.',
    'model.3.title': 'Catalogue and shop',
    'model.3.body': 'Your products sorted and filterable, with a direct WhatsApp enquiry from every item.',
    'model.4.title': 'Company and B2B services',
    'model.4.body': 'A solid presence to compete for contracts: proposal, credentials and a formal enquiry form.',

    'services.title': 'What working with me includes',
    'service.1.title': 'Custom design',
    'service.1.body': 'No bought templates. The structure comes from how your customers buy, not from a prefab theme.',
    'service.1.a': 'Visual proposal upfront',
    'service.1.b': 'Two rounds of changes',
    'service.1.c': 'Copy sorted out together',
    'service.2.title': 'Domain and publishing',
    'service.2.body': 'Your own address, security certificate and a deployment ready to receive visitors.',
    'service.2.a': '.pe or .com domain',
    'service.2.b': 'HTTPS included',
    'service.2.c': 'Contact mailbox',
    'service.3.title': 'Direct contact',
    'service.3.body': 'WhatsApp, a form and visible calls to action in every section so no enquiry gets lost.',
    'service.3.a': 'WhatsApp in one tap',
    'service.3.b': 'Form sent to your inbox',
    'service.3.c': 'Map and opening hours',
    'service.4.title': 'Local SEO and support',
    'service.4.body': 'So people find you when they search your trade in your area, and the site stays cared for after launch.',
    'service.4.a': 'Google business profile',
    'service.4.b': 'Visitor tracking',
    'service.4.c': 'Monthly changes',

    'promise.1.big': '2 to 4 weeks',
    'promise.1.label': 'From the first message to a published site.',
    'promise.2.big': 'Your own domain',
    'promise.2.label': 'Included in every project, in your name.',
    'promise.3.big': 'Direct dealing',
    'promise.3.label': 'You talk to me, not to a middleman.',

    'contact.title': 'Tell me about your business.<br />I send you back a model.',
    'contact.body': 'Write to me about what you sell and to whom. I prepare a visual proposal with your own domain, free and with no strings attached.',
    'contact.wa': 'WhatsApp',
    'contact.wa.cta': 'Message me on WhatsApp',
    'contact.mail': 'Email',

    'footer.place': 'Lima, Peru'
  };

  /* el mensaje que se precarga en WhatsApp sigue el idioma del visitante */
  var WHATSAPP = {
    es: 'https://wa.me/51987032689?text=Hola,%20quiero%20una%20web%20para%20mi%20negocio',
    en: 'https://wa.me/51987032689?text=Hi,%20I%20would%20like%20a%20website%20for%20my%20business'
  };

  var META = {
    es: {
      lang: 'es',
      title: 'Yan Yupanqui | Diseño web sobrio para negocios',
      description:
        'Diseño web para negocios en Lima. Modelos de páginas listos por rubro: restaurante, clínica, catálogo y empresa. Dominio propio, contacto por WhatsApp y entrega en 2 a 4 semanas.',
      toggle: 'EN',
      toggleLabel: 'Switch to English'
    },
    en: {
      lang: 'en',
      title: 'Yan Yupanqui | Quiet web design for small businesses',
      description:
        'Web design for businesses in Lima, Peru. Ready page models by trade: restaurant, clinic, catalogue and company. Your own domain, WhatsApp contact and delivery in 2 to 4 weeks.',
      toggle: 'ES',
      toggleLabel: 'Cambiar a español'
    }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var ES = {};

  nodes.forEach(function (el) {
    ES[el.getAttribute('data-i18n')] = el.innerHTML;
  });

  function applyLanguage(lang) {
    var dict = lang === 'en' ? EN : ES;
    var meta = META[lang] || META.es;

    nodes.forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (typeof value === 'string') el.innerHTML = value;
    });

    document.documentElement.lang = meta.lang;
    document.title = meta.title;

    var wa = WHATSAPP[lang] || WHATSAPP.es;
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      link.setAttribute('href', wa);
    });

    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.description);

    if (toggle) {
      toggle.textContent = meta.toggle;
      toggle.setAttribute('aria-label', meta.toggleLabel);
    }

    try {
      localStorage.setItem('lang', lang);
    } catch (error) {
      /* navegación privada: seguimos sin recordar la elección */
    }
  }

  var toggle = document.getElementById('languageToggle');
  var stored = null;

  try {
    stored = localStorage.getItem('lang');
  } catch (error) {
    stored = null;
  }

  var initial = stored || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  if (initial === 'en') applyLanguage('en');

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyLanguage(document.documentElement.lang === 'en' ? 'es' : 'en');
    });
  }
})();
