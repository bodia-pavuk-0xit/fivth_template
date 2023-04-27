const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarOverlay = document.querySelector('.navbar-overlay');

function checkNavbarPosition() {
  if (window.pageYOffset > navbar.offsetHeight) {
    navbar.classList.add('navbar-bg');
  } else {
    navbar.classList.remove('navbar-bg');
    if (navbar.classList.contains('active')) {
      navbar.classList.add('navbar-bg');
    } else {
      navbar.classList.remove('navbar-bg');
    }
  }
}

window.setInterval(checkNavbarPosition, 1);

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navbarOverlay.classList.toggle('active');
  navbar.classList.toggle('navbar-bg');
});

checkNavbarPosition();  var url = window.location;
$('ul.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
$('ul.navbar-nav a').filter(function() {
  return this.href == url;
}).parent().addClass('active');