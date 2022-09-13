const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      890: {
      slidesPerView: 2,
      },
    },
    spaceBetween: 25,
    speed: 3000,
    effect: 'slide',  
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });