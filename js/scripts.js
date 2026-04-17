window.addEventListener('DOMContentLoaded', function () {
  var sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px -40%'
    });
  }

  var navbarToggler = document.body.querySelector('.navbar-toggler');
  var responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );

  responsiveNavItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});
