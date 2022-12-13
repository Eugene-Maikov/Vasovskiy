/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const sliderIntro = new Swiper(".intro", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".intro-next",
      prevEl: ".intro-prev",
    }
  });
  const sliderIntroCalculator = new Swiper(".intro-calculator", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".intro-next",
      prevEl: ".intro-prev",
    }
  });
});
