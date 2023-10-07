const swiper = new Swiper('.about-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.about-slider__pagination',
      clickable: true,
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction: true
    }
  });