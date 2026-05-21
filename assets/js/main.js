const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasSaveData = Boolean(navigator.connection && navigator.connection.saveData);
const lowMemoryDevice = Number(navigator.deviceMemory || 8) <= 4;
const lowCoreDevice = Number(navigator.hardwareConcurrency || 8) <= 4;
const isLowEndDevice = prefersReducedMotion || hasSaveData || lowMemoryDevice || lowCoreDevice;

if (isLowEndDevice) {
  document.documentElement.classList.add('low-end');
}

const languageToggle = document.getElementById('languageToggle');
const heroUrlText = document.getElementById('heroUrlText');
const animatedUrlText = document.getElementById('animatedUrlText');

let currentLanguage = 'es';
let customUrls = [];
let urlIndex = 0;

const whatsappNumber = '51987032689';

const translations = {
  en: {
    htmlLang: 'en-US',
    title: 'Tech Strike | Commercial Web Design for Businesses',
    metaDescription:
      'Professional web design for businesses. We build modern, fast, conversion-focused websites with custom domains and direct WhatsApp contact.',
    metaOgTitle: 'Tech Strike | Commercial Web Design for Businesses',
    metaOgDescription:
      'Modern, professional, conversion-focused websites for businesses ready to grow online.',
    urls: [
      'downtowncafe.com',
      'sanmartinclinic.com',
      'limalawfirm.com',
      'andesrealty.com',
      'southmotorshop.com',
      'creativeatelier.com',
    ],
    text: {
      'nav[aria-label]': 'Main navigation',
      '.nav-logo[aria-label]': 'Go to Tech Strike homepage',
      '.nav-mobile-btn[aria-label]': 'Open menu',
      '.hero-kicker': 'Strategic web design for businesses',
      '#hero h1': 'Make your business look professional and turn more visits into customers.',
      '.hero-sub':
        'At Tech Strike, we build modern, fast, result-driven websites with strong visual identity, clear structure, and direct contact channels to help you capture more opportunities.',
      '.hero-ctas .btn-primary': 'Request proposal',
      '.hero-ctas .btn-ghost': 'View plans',
      '.pulse-card p': 'Modern, fast, and results-focused design',
      '#experiencia .section-tag': 'Visual experience',
      '#experiencia .section-title': 'Dynamic, modern, and minimal websites that make your brand more memorable',
      '#experiencia .section-sub':
        'We use motion with intention: a professional, lightweight visual experience focused on conversion.',
      '#urls .section-tag': 'Custom domain',
      '#urls .section-title': 'Custom domains that help your business stand out online',
      '#urls .section-sub':
        'Make your brand look trustworthy with a professional, memorable URL aligned with your identity. The right domain improves your digital presence and helps customers find you faster.',
      '.url-cta': 'I want my custom domain',
      '#servicios .section-tag': 'Services',
      '#servicios .section-title': 'Web solutions built to sell more and serve better',
      '#servicios .section-sub': 'Each service is adapted to your market, your offer, and how your customers buy.',
      '#planes .section-tag': 'Plans',
      '#planes .section-title': 'Web solutions designed to grow your business',
      '#planes .plans-sub':
        'Clear, professional, scalable plans for businesses that need digital presence, lead generation, and ongoing support.',
      '.plan-card-basic .plan-name': 'Basic Plan',
      '.plan-card-standard .plan-name': 'Standard Plan',
      '.plan-card-advanced .plan-name': 'Advanced Plan',
      '.plan-card-basic .plan-label': 'Includes:',
      '.plan-card-standard .plan-label': 'Includes:',
      '.plan-card-advanced .plan-label': 'Includes:',
      '.plan-card-basic .plan-cta': 'Get Basic Plan',
      '.plan-card-standard .plan-cta': 'Get Standard Plan',
      '.plan-card-advanced .plan-cta': 'Get Advanced Plan',
      '.custom-plan-note':
        'Need something else? Message us on WhatsApp and we will prepare a custom proposal for your business.',
      '#contacto h2': 'Want a different website for your business?',
      '#contacto p':
        'We will show you a visual proposal with a custom domain, professional structure, and a style tailored to your industry.',
      '#contacto .btn-primary': 'Request custom proposal',
      '#faq .section-tag': 'Frequently asked questions',
      '#faq .section-title': 'Everything clear before we start',
      '.footer-text': 'Web design for brands that want to look professional and convert more leads.',
      '.footer-col:nth-child(2) h4': 'Contact',
      '.footer-city': 'Lima, Peru - National and international service',
      '.footer-col:nth-child(3) h4': 'Quick links',
      '.footer-bottom p:nth-child(2)': 'Commercial websites with local identity',
      '.wa-float[aria-label]': 'Open WhatsApp',
      '.plans-tags[aria-label]': 'Plan benefits',
      '.gif-card:nth-child(1) video[aria-label]': 'Animated section with commercial focus for a website',
      '.gif-card:nth-child(2) video[aria-label]': 'Modern visual layout for a commercial website',
      '.gif-card:nth-child(3) video[aria-label]': 'Friendly website design focused on user experience',
      '.browser-body video[aria-label]': 'Animated preview of a professional web interface',
    },
    listText: {
      '.nav-links a': ['Experience', 'Domains', 'Services', 'Plans', 'Get a quote'],
      '.mobile-menu a': ['Experience', 'Custom domains', 'Services', 'Plans', 'Quote on WhatsApp'],
      '.hero-points li': [
        'Responsive design for phone, tablet, and desktop',
        'Modern and professional visual experience',
        'WhatsApp, forms, and conversion-focused structure',
      ],
      '.gif-card h3': [
        'Commercial blocks with dynamic presentation',
        'Modern and professional visual presentation',
        'Clear, friendly, easy-to-navigate websites',
      ],
      '.url-tags span': ['Restaurants', 'Clinics', 'Law firms', 'Real estate'],
      '.services-grid .service-card h3': [
        'Conversion-focused landing page',
        'Trust-building corporate website',
        'Interactive digital catalog',
        'Optimized contact flow',
        'Animations and motion UI',
        'Local SEO and maintenance',
      ],
      '.services-grid .service-card p': [
        'Clear offer, visual proof, and strategic calls to action to turn visits into conversations.',
        'Elegant design to communicate credibility, strengthen your brand, and close higher-value opportunities.',
        'Show your products or services with a clear structure that helps buyers decide faster.',
        'WhatsApp, smart forms, and visible calls to action throughout the website experience.',
        'Smooth transitions and dynamic sections for a modern, memorable, and professional experience.',
        'Initial optimization, ongoing improvements, and support to keep your digital presence active and competitive.',
      ],
      '.plans-tags span': ['Professional design', 'Ongoing support', 'Managed infrastructure', 'Built to scale'],
      '.plan-card-basic .plan-tags span': ['Base', 'Informational website'],
      '.plan-card-standard .plan-tags span': ['Recommended', 'Best seller', 'Admin panel'],
      '.plan-card-advanced .plan-tags span': ['Premium', 'Scalable', 'Full stack'],
      '.plan-card-basic .plan-price span': ['per month', '/', 'annual contract', '/', 'domain included', '/', 'basic support'],
      '.plan-card-standard .plan-price span': [
        'per month',
        '/',
        'annual contract',
        '/',
        'domain included',
        '/',
        'continuous support and maintenance',
      ],
      '.plan-card-advanced .plan-price span': [
        'per month',
        '/',
        'annual contract',
        '/',
        'domain included',
        '/',
        'priority support and ongoing maintenance',
      ],
      '.plan-card-basic .plan-price-compact span': ['one-time payment', '/', '3 months of support and benefits'],
      '.plan-card-standard .plan-price-compact span': ['one-time payment', '/', '3 months of support and benefits'],
      '.plan-card-advanced .plan-price-compact span': ['one-time payment', '/', '3 months of support and benefits'],
      '.plan-card-basic .plan-features li': [
        'Professional web design',
        'Informational website',
        'Up to 8 sections',
        'Mobile and tablet adaptation',
        'WhatsApp and social media integration',
        'Contact form',
        'Managed domain and hosting for 12 months',
        'Basic speed optimization',
        'Minor content updates',
        'Basic technical support',
      ],
      '.plan-card-standard .plan-features li': [
        'Custom web design',
        'Manageable platform',
        'Secure admin access',
        'Product or service catalog',
        'Dynamic content management',
        'Advanced contact forms',
        'WhatsApp and email inquiries',
        'Basic client and request management',
        'Initial SEO optimization',
        'Basic security and protection',
        'Performance optimization',
        'Managed domain and hosting',
        'Periodic backups',
        'Maintenance and technical support',
      ],
      '.plan-card-advanced .plan-features li': [
        'Custom web development',
        'Advanced manageable platform',
        'Secure admin access',
        'Dynamic product or service catalog',
        'Advanced content management',
        'Order and request management',
        'Integrated WhatsApp and email inquiries',
        'Client and contact management',
        'Administrative dashboard',
        'Reinforced security and basic monitoring',
        'Advanced speed and performance optimization',
        'Architecture prepared to scale',
        'Initial technical SEO optimization',
        'High-performance managed infrastructure',
        'Automatic backups',
        'Continuous maintenance',
        'Priority technical support',
      ],
      '#faq .faq-card h3': [
        'Does it include animations and dynamic visual elements?',
        'Can I have multiple URLs for campaigns or services?',
        'How long does it take to launch my website?',
      ],
      '#faq .faq-card p': [
        'Yes. We design sections with lightweight animation and modern visual effects to improve experience without hurting loading speed.',
        'Yes. We can create custom domains or paths for campaigns, seasons, or specific services, adapted to your audience and business goals.',
        'The average delivery time is 10 to 15 business days, including revisions and guidance during the process.',
      ],
      '.footer-col:nth-child(3) .footer-link': ['Custom domains', 'Services', 'Plans', 'Contact'],
    },
    htmlList: {
      '.plan-renewal': [
        'Renewal after the first year from <strong>S/ 60 monthly</strong>',
        'Renewal after the first year from <strong>S/ 250 monthly</strong>',
        'Renewal after the first year from <strong>S/ 350 monthly</strong>',
      ],
    },
    whatsapp: {
      '.hero-ctas .btn-primary': 'Hello, I want a professional website for my business',
      '.url-cta': 'I want my custom domain',
      '.plan-card-basic .plan-cta': 'I want the Basic Plan',
      '.plan-card-standard .plan-cta': 'I want the Standard Plan',
      '.plan-card-advanced .plan-cta': 'I want the Advanced Plan',
      '#contacto .btn-primary': 'Hello, I want my website with a custom domain',
      '.wa-float': 'Hello, I want more information',
    },
  },
  es: {
    htmlLang: 'es',
    title: 'Tech Strike | Diseno Web Comercial para Negocios',
    metaDescription:
      'Diseno web profesional para negocios. Creamos paginas modernas, rapidas y orientadas a conversion, con dominio personalizado, enfoque comercial y contacto directo por WhatsApp.',
    metaOgTitle: 'Tech Strike | Diseno Web Comercial para Negocios',
    metaOgDescription:
      'Sitios web modernos, profesionales y orientados a conversion para negocios que buscan crecer en internet.',
    urls: [
      'cafebarranco.com',
      'clinicasanmartin.com',
      'abogadoslima.com',
      'inmobiliariaandes.com',
      'tallermotorsur.com',
      'estudiocreativo.com',
    ],
    text: {
      'nav[aria-label]': 'Navegacion principal',
      '.nav-logo[aria-label]': 'Ir al inicio de Tech Strike',
      '.nav-mobile-btn[aria-label]': 'Abrir menu',
      '.hero-kicker': 'Diseno web estrategico para negocios',
      '#hero h1': 'Haz que tu negocio se vea profesional y convierta mas visitas en clientes.',
      '.hero-sub':
        'En Tech Strike disenamos sitios web modernos, rapidos y orientados a resultados, con identidad visual solida, estructura clara y canales de contacto directos para ayudarte a captar mas oportunidades.',
      '.hero-ctas .btn-primary': 'Solicitar propuesta',
      '.hero-ctas .btn-ghost': 'Ver planes',
      '.pulse-card p': 'Diseno moderno, rapido y orientado a resultados',
      '#experiencia .section-tag': 'Experiencia visual',
      '#experiencia .section-title': 'Paginas dinamicas, modernas y minimalistas que hacen tu marca mas memorable',
      '#experiencia .section-sub':
        'Usamos movimiento con criterio: una experiencia visual profesional, ligera y orientada a conversion.',
      '#urls .section-tag': 'Dominio personalizado',
      '#urls .section-title': 'Dominios personalizados para que tu negocio destaque en internet',
      '#urls .section-sub':
        'Haz que tu marca proyecte confianza con una URL profesional, facil de recordar y alineada a tu identidad comercial. Un dominio bien elegido mejora tu presencia digital y ayuda a que tus clientes te encuentren con mas facilidad.',
      '.url-cta': 'Quiero mi dominio personalizado',
      '#servicios .section-tag': 'Servicios',
      '#servicios .section-title': 'Soluciones web listas para vender mas y atender mejor',
      '#servicios .section-sub':
        'Cada servicio se adapta a tu rubro, tu propuesta y la forma en la que compran tus clientes.',
      '#planes .section-tag': 'Planes',
      '#planes .section-title': 'Soluciones web disenadas para impulsar tu negocio',
      '#planes .plans-sub':
        'Planes claros, profesionales y escalables para negocios que buscan presencia digital, captacion de clientes y soporte continuo.',
      '.plan-card-basic .plan-name': 'Plan Basico',
      '.plan-card-standard .plan-name': 'Plan Estandar',
      '.plan-card-advanced .plan-name': 'Plan Avanzado',
      '.plan-card-basic .plan-label': 'Incluye:',
      '.plan-card-standard .plan-label': 'Incluye:',
      '.plan-card-advanced .plan-label': 'Incluye:',
      '.plan-card-basic .plan-cta': 'Cotizar Plan Basico',
      '.plan-card-standard .plan-cta': 'Cotizar Plan Estandar',
      '.plan-card-advanced .plan-cta': 'Cotizar Plan Avanzado',
      '.custom-plan-note':
        'No encuentras lo que buscas? Escribenos por WhatsApp y te preparamos una propuesta personalizada.',
      '#contacto h2': 'Quieres una web diferente para tu negocio?',
      '#contacto p':
        'Te mostramos una propuesta visual con dominio personalizado, estructura profesional y estilo adaptado a tu rubro.',
      '#contacto .btn-primary': 'Solicitar propuesta personalizada',
      '#faq .section-tag': 'Preguntas frecuentes',
      '#faq .section-title': 'Todo claro antes de empezar',
      '.footer-text': 'Diseno web para marcas que quieren verse profesionales y convertir mas contactos.',
      '.footer-col:nth-child(2) h4': 'Contacto',
      '.footer-city': 'Lima, Peru - Atencion nacional e internacional',
      '.footer-col:nth-child(3) h4': 'Atajos',
      '.footer-bottom p:nth-child(2)': 'Webs comerciales con identidad local',
      '.wa-float[aria-label]': 'Abrir WhatsApp',
      '.plans-tags[aria-label]': 'Beneficios de los planes',
      '.gif-card:nth-child(1) video[aria-label]': 'Seccion animada con enfoque comercial para pagina web',
      '.gif-card:nth-child(2) video[aria-label]': 'Vista de diseno moderno para pagina web comercial',
      '.gif-card:nth-child(3) video[aria-label]': 'Diseno de sitio web amigable y enfocado en experiencia de usuario',
      '.browser-body video[aria-label]': 'Vista previa animada de una interfaz web profesional',
    },
    listText: {
      '.nav-links a': ['Experiencia', 'Dominios', 'Servicios', 'Planes', 'Cotizar ahora'],
      '.mobile-menu a': ['Experiencia', 'Dominios personalizados', 'Servicios', 'Planes', 'Cotizar por WhatsApp'],
      '.hero-points li': [
        'Diseno adaptable a celular, tablet y desktop',
        'Experiencia visual moderna y profesional',
        'WhatsApp, formularios y estructura enfocada en conversion',
      ],
      '.gif-card h3': [
        'Bloques comerciales con presentacion dinamica',
        'Presentacion visual moderna y profesional',
        'Sitios claros, cercanos y faciles de recorrer',
      ],
      '.url-tags span': ['Restaurantes', 'Clinicas', 'Abogados', 'Inmobiliaria'],
      '.services-grid .service-card h3': [
        'Landing page enfocada en conversion',
        'Web corporativa de confianza',
        'Catalogo digital interactivo',
        'Flujo de contacto optimizado',
        'Animaciones y motion UI',
        'SEO local y mantenimiento',
      ],
      '.services-grid .service-card p': [
        'Oferta clara, prueba visual y llamados a la accion estrategicos para convertir visitas en conversaciones.',
        'Diseno elegante para transmitir solidez, fortalecer tu imagen y cerrar oportunidades de mayor valor.',
        'Muestra tus productos o servicios con una estructura clara para facilitar decisiones de compra.',
        'WhatsApp, formularios inteligentes y llamadas a la accion visibles en toda la experiencia del sitio.',
        'Transiciones suaves y secciones dinamicas para una experiencia moderna, memorable y profesional.',
        'Optimizacion inicial, mejoras continuas y soporte para mantener tu presencia digital activa y competitiva.',
      ],
      '.plans-tags span': ['Diseno profesional', 'Soporte continuo', 'Infraestructura administrada', 'Preparado para crecer'],
      '.plan-card-basic .plan-tags span': ['Base', 'Sitio informativo'],
      '.plan-card-standard .plan-tags span': ['Recomendado', 'Mas vendido', 'Panel admin'],
      '.plan-card-advanced .plan-tags span': ['Premium', 'Escalable', 'Full stack'],
      '.plan-card-basic .plan-price span': ['al mes', '/', 'contrato anual', '/', 'dominio incluido', '/', 'soporte basico'],
      '.plan-card-standard .plan-price span': [
        'al mes',
        '/',
        'contrato anual',
        '/',
        'dominio incluido',
        '/',
        'soporte y mantenimiento continuo',
      ],
      '.plan-card-advanced .plan-price span': [
        'al mes',
        '/',
        'contrato anual',
        '/',
        'dominio incluido',
        '/',
        'soporte prioritario y mantenimiento continuo',
      ],
      '.plan-card-basic .plan-price-compact span': ['pago unico', '/', '3 meses de soporte y beneficios'],
      '.plan-card-standard .plan-price-compact span': ['pago unico', '/', '3 meses de soporte y beneficios'],
      '.plan-card-advanced .plan-price-compact span': ['pago unico', '/', '3 meses de soporte y beneficios'],
      '.plan-card-basic .plan-features li': [
        'Diseno web profesional',
        'Pagina web informativa',
        'Hasta 8 secciones',
        'Adaptacion para celulares y tablets',
        'Integracion con WhatsApp y redes sociales',
        'Formulario de contacto',
        'Dominio y hosting administrado por 12 meses',
        'Optimizacion basica de velocidad',
        'Actualizaciones menores de contenido',
        'Soporte tecnico basico',
      ],
      '.plan-card-standard .plan-features li': [
        'Diseno web personalizado',
        'Plataforma administrable',
        'Acceso administrativo seguro',
        'Catalogo de productos o servicios',
        'Gestion de contenido dinamico',
        'Formularios de contacto avanzados',
        'Consultas via WhatsApp y correo',
        'Gestion basica de clientes y solicitudes',
        'Optimizacion SEO inicial',
        'Seguridad y proteccion basica',
        'Optimizacion de rendimiento',
        'Dominio y hosting administrado',
        'Backups periodicos',
        'Mantenimiento y soporte tecnico',
      ],
      '.plan-card-advanced .plan-features li': [
        'Desarrollo web personalizado',
        'Plataforma administrable avanzada',
        'Acceso administrativo seguro',
        'Catalogo dinamico de productos o servicios',
        'Gestion avanzada de contenido',
        'Gestion de pedidos y solicitudes',
        'Consultas integradas via WhatsApp y correo',
        'Gestion de clientes y contactos',
        'Dashboard administrativo',
        'Seguridad reforzada y monitoreo basico',
        'Optimizacion avanzada de velocidad y rendimiento',
        'Arquitectura preparada para escalar',
        'Optimizacion SEO tecnica inicial',
        'Infraestructura administrada de alto rendimiento',
        'Backups automaticos',
        'Mantenimiento continuo',
        'Soporte tecnico prioritario',
      ],
      '#faq .faq-card h3': [
        'Incluye animaciones y elementos visuales dinamicos?',
        'Puedo tener varias URLs para campanas o servicios?',
        'En cuanto tiempo estara lista mi web?',
      ],
      '#faq .faq-card p': [
        'Si. Disenamos secciones con animaciones ligeras y efectos visuales modernos para mejorar la experiencia sin afectar la velocidad de carga.',
        'Si. Podemos crear dominios o rutas personalizadas para campanas, temporadas o servicios especificos, adaptadas a tu publico y a tus objetivos comerciales.',
        'El tiempo promedio de desarrollo es de 10 a 15 dias habiles, incluyendo revisiones y acompanamiento durante el proceso.',
      ],
      '.footer-col:nth-child(3) .footer-link': ['Dominios personalizados', 'Servicios', 'Planes', 'Contacto'],
    },
    htmlList: {
      '.plan-renewal': [
        'Renovacion despues del primer ano desde <strong>S/ 60 mensuales</strong>',
        'Renovacion despues del primer ano desde <strong>S/ 250 mensuales</strong>',
        'Renovacion despues del primer ano desde <strong>S/ 350 mensuales</strong>',
      ],
    },
    whatsapp: {
      '.hero-ctas .btn-primary': 'Hola, quiero una web profesional para mi negocio',
      '.url-cta': 'Quiero mi dominio personalizado',
      '.plan-card-basic .plan-cta': 'Quiero el Plan Basico',
      '.plan-card-standard .plan-cta': 'Quiero el Plan Estandar',
      '.plan-card-advanced .plan-cta': 'Quiero el Plan Avanzado',
      '#contacto .btn-primary': 'Hola, quiero mi web con dominio personalizado',
      '.wa-float': 'Hola, quiero informacion',
    },
  },
};

function setText(selector, value) {
  const isAttribute = selector.endsWith(']');
  const splitIndex = selector.lastIndexOf('[');

  if (isAttribute && splitIndex > -1) {
    const baseSelector = selector.slice(0, splitIndex);
    const attrName = selector.slice(splitIndex + 1, -1);
    document.querySelectorAll(baseSelector).forEach((node) => node.setAttribute(attrName, value));
    return;
  }

  const node = document.querySelector(selector);
  if (node) {
    node.textContent = value;
  }
}

function setTextList(selector, values) {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node, index) => {
    if (values[index] !== undefined) {
      node.textContent = values[index];
    }
  });
}

function setHtmlList(selector, values) {
  const nodes = document.querySelectorAll(selector);
  nodes.forEach((node, index) => {
    if (values[index] !== undefined) {
      node.innerHTML = values[index];
    }
  });
}

function setMeta(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute('content', value);
  }
}

function setWhatsAppLinks(entries) {
  Object.entries(entries).forEach(([selector, message]) => {
    const node = document.querySelector(selector);
    if (node) {
      node.setAttribute('href', `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
    }
  });
}

function detectClientLanguage() {
  const available = [navigator.language, ...(navigator.languages || [])]
    .filter(Boolean)
    .map((lang) => String(lang).toLowerCase());

  if (available.some((lang) => lang.startsWith('en'))) {
    return 'en';
  }

  if (available.some((lang) => lang.startsWith('es'))) {
    return 'es';
  }

  return 'en';
}

function applyLanguage(language) {
  const config = translations[language] || translations.en;
  currentLanguage = language;
  customUrls = config.urls;
  urlIndex = 0;

  document.documentElement.lang = config.htmlLang;
  document.title = config.title;
  setMeta('meta[name="description"]', config.metaDescription);
  setMeta('meta[property="og:title"]', config.metaOgTitle);
  setMeta('meta[property="og:description"]', config.metaOgDescription);

  Object.entries(config.text).forEach(([selector, value]) => setText(selector, value));
  Object.entries(config.listText).forEach(([selector, values]) => setTextList(selector, values));
  Object.entries(config.htmlList).forEach(([selector, values]) => setHtmlList(selector, values));
  setWhatsAppLinks(config.whatsapp);

  if (languageToggle) {
    if (language === 'en') {
      languageToggle.textContent = 'ES';
      languageToggle.setAttribute('aria-label', 'Switch to Spanish');
    } else {
      languageToggle.textContent = 'EN';
      languageToggle.setAttribute('aria-label', 'Switch to English');
    }
  }

  rotateUrls();
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const button = document.querySelector('.nav-mobile-btn');
  if (!menu) {
    return;
  }

  menu.classList.toggle('open');
  if (button) {
    button.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
  }
}

function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  const button = document.querySelector('.nav-mobile-btn');

  if (!menu || !menu.classList.contains('open')) {
    return;
  }

  menu.classList.remove('open');
  if (button) {
    button.setAttribute('aria-expanded', 'false');
  }
}

applyLanguage(detectClientLanguage());

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const nextLanguage = currentLanguage === 'en' ? 'es' : 'en';
    applyLanguage(nextLanguage);
    closeMenu();
  });
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

const nav = document.querySelector('nav');

function updateNavOnScroll() {
  if (!nav) {
    return;
  }

  if (window.scrollY > 24) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
}

window.addEventListener('scroll', updateNavOnScroll, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    closeMenu();
  }
});
updateNavOnScroll();

function typeUrl(text, target, speed = 42) {
  if (!target) {
    return;
  }

  if (isLowEndDevice) {
    target.textContent = text;
    return;
  }

  target.textContent = '';

  let charIndex = 0;
  const timer = setInterval(() => {
    target.textContent += text.charAt(charIndex);
    charIndex += 1;

    if (charIndex >= text.length) {
      clearInterval(timer);
    }
  }, speed);
}

function rotateUrls() {
  if (!customUrls.length) {
    return;
  }

  const current = customUrls[urlIndex];

  if (heroUrlText) {
    heroUrlText.textContent = `www.${current}`;
  }

  typeUrl(current, animatedUrlText);
  urlIndex = (urlIndex + 1) % customUrls.length;
}

if (animatedUrlText || heroUrlText) {
  setInterval(rotateUrls, isLowEndDevice ? 5000 : 2800);
}

const videos = document.querySelectorAll('video');

if (videos.length > 0) {
  const canObserve = 'IntersectionObserver' in window;

  videos.forEach((video) => {
    const isPriorityVideo = video.dataset.priority === 'high';

    if (isLowEndDevice && !isPriorityVideo) {
      video.setAttribute('preload', 'none');
      video.removeAttribute('autoplay');
      video.pause();
    }
  });

  if (canObserve) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const isPriorityVideo = video.dataset.priority === 'high';
          const shouldRun = video.hasAttribute('autoplay') && (!isLowEndDevice || isPriorityVideo);

          if (!shouldRun) {
            return;
          }

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    videos.forEach((video) => videoObserver.observe(video));
  }
}