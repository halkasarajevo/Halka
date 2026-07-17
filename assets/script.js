const buttons = document.querySelectorAll('.lang-btn');
const translatable = document.querySelectorAll('[data-bs][data-en]');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  translatable.forEach(el => {
    el.textContent = el.dataset[lang];
  });
  buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('halka-language', lang);
}

buttons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('halka-language') || 'bs');
