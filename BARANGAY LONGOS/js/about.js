document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-link');
  const navMenu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});