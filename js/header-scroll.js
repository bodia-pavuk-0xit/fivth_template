const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggler');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > navbar.offsetHeight) {
    navbar.classList.add('navbar-bg');
  } else {
    navbar.classList.remove('navbar-bg');
  }
});

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navbarOverlay.classList.toggle('active');
});