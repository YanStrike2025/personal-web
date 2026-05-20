// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) {
    return;
  }

  menu.classList.toggle('open');
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

window.addEventListener('scroll', () => {

  if (!nav) {
    return;
  }

  if (window.scrollY > 80) {
    nav.style.background = 'rgba(8,12,16,0.95)';
  } else {
    nav.style.background = 'rgba(8,12,16,0.72)';
  }

});