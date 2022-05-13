$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    nav:true,
    center: true,
    items:5,
    loop:true,
    margin:70,
    autoplay:true,
    autoWidth: true,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:2,
        nav:false,
        margin:30,
        autoplay:false,
      },
      720:{
        items:3,
        autoplay:true,
      }
    }
  });


});