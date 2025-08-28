document.addEventListener('DOMContentLoaded', () => {
  const menuLink = document.querySelector('.menu-link');
  const mainNav = document.querySelector('.main-nav');

  menuLink.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });

  const tabLinks = document.querySelectorAll('#tabs ul li a');
  const tabContents = document.querySelectorAll('.tabs-content article');

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      tabLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetId = link.getAttribute('href').replace('#', '');
      tabContents.forEach(article => {
        if (article.id === targetId) {
          article.classList.add('active');
        } else {
          article.classList.remove('active');
        }
      });
    });
  });

  if (tabLinks.length > 0) {
    tabLinks[0].classList.add('active');
    document.querySelector(`#${tabLinks[0].getAttribute('href').substring(1)}`).classList.add('active');
  }

  if (typeof $ !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {
    $('.owl-carousel').owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }
});

document.getElementById('contact').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const text = 'Kumusta, ako si ' + name;
  const url = 'https://wa.me/6289639050608?text=' + encodeURIComponent(text + ':%0A' + message);
  window.open(url, '_blank');
});