$(document).ready(function () {
  $("#product-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    autoplay: true,
    margin: 10,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $("#testimonial-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    autoplay: true,
    margin: 10,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  $("body").scrollspy({ target: ".navbar-nav" });
});
