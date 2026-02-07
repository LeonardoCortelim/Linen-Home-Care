// Menu Hambúrguer - Funcionalidade
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Abrir/Fechar menu ao clicar no botão hambúrguer
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});

// Efeito de scroll no header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});