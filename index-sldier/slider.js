const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true,

  lazy: {
    loadPrevNext: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    767: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
