const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

function closeMenu() {
  menu?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menu?.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
  document.body.classList.toggle('menu-open', Boolean(isOpen));
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
