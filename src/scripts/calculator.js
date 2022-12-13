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

let outputHouse = document.querySelector('#rangeValueHouse');
let outputRegion = document.querySelector('#rangeValueRegion');
let widthWindow = document.documentElement.clientWidth;

function outputUpdateHouse(vol){
  outputHouse.value = vol;

  if (outputHouse.value >= 0){
    outputHouse.style.left = vol / 40000 - 120 + 'px';
    outputHouse.value = `${vol} ₽`;

    if (widthWindow < 800) {
      outputHouse.style.left = vol / 92000 - 55 + 'px';
    }
    if (widthWindow < 424) {
      outputHouse.style.left = vol / 124000 - 42 + 'px';
    }

  }
}

function outputUpdateRegion(vol){
  outputRegion.value = vol;

  if (outputRegion.value >= 0){
    outputRegion.style.left = vol / 16000 + 'px';
    outputRegion.value = `${vol} ₽`;

    if (widthWindow < 800) {
      outputRegion.style.left = vol / 37000 + 6 + 'px';
    }
    if (widthWindow < 424) {
      outputRegion.style.left = vol / 53000 + 6 + 'px';
    }
  }
}

