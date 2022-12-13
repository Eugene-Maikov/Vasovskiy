/* eslint-disable no-undef */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var sliderIntro = new Swiper(".intro", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".intro-next",
      prevEl: ".intro-prev"
    }
  });
  var sliderIntroCalculator = new Swiper(".intro-calculator", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".intro-next",
      prevEl: ".intro-prev"
    }
  });
});
//# sourceMappingURL=index.js.map
