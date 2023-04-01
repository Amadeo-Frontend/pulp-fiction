//SWIPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 2500,
  },
  direction: "horizontal",
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
