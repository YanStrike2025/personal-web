// Mobile menu
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

// Scroll reveal
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

// Navbar scroll effect
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

// Animated custom URL rotator
const heroUrlText = document.getElementById('heroUrlText');
const animatedUrlText = document.getElementById('animatedUrlText');

const customUrls = [
  'cafebarranco.com',
  'clinicasanmartin.com',
  'abogadoslima.com',
  'inmobiliariaandes.com',
  'tallermotorsur.com',
  'estudiocreativo.com',
];

let urlIndex = 0;

function typeUrl(text, target, speed = 42) {
  if (!target) {
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
  const current = customUrls[urlIndex];

  if (heroUrlText) {
    heroUrlText.textContent = `www.${current}`;
  }

  typeUrl(current, animatedUrlText);

  urlIndex = (urlIndex + 1) % customUrls.length;
}

if (animatedUrlText || heroUrlText) {
  rotateUrls();
  setInterval(rotateUrls, 2800);
}