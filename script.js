new LazyLoad({});

new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
