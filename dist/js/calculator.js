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
var outputHouse = document.querySelector('#rangeValueHouse');
var outputRegion = document.querySelector('#rangeValueRegion');
var rangeHouse = document.querySelector('#rangeHouse');
var rangeRegion = document.querySelector('#rangeRegion');
var checkboxes = document.querySelectorAll(".forms__input--checkbox");
var form = document.querySelector('#calculator-form');
var widthWindow = document.documentElement.clientWidth;

function outputUpdateHouse(vol) {
  outputHouse.value = vol;

  if (outputHouse.value >= 0) {
    outputHouse.style.left = vol / 40000 - 120 + 'px';
    outputHouse.value = "".concat(vol, " \u20BD");

    if (widthWindow < 800) {
      outputHouse.style.left = vol / 92000 - 55 + 'px';
    }

    if (widthWindow < 424) {
      outputHouse.style.left = vol / 124000 - 42 + 'px';
    }
  }

  rangeHouse.setAttribute('value', vol);
}

function outputUpdateRegion(vol) {
  outputRegion.value = vol;

  if (outputRegion.value >= 0) {
    outputRegion.style.left = vol / 16000 + 'px';
    outputRegion.value = "".concat(vol, " \u20BD");

    if (widthWindow < 800) {
      outputRegion.style.left = vol / 37000 + 6 + 'px';
    }

    if (widthWindow < 424) {
      outputRegion.style.left = vol / 53000 + 6 + 'px';
    }
  }

  rangeRegion.setAttribute('value', vol);
} // Валидация checkbox


form.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageError = document.querySelector('.error-message');
  checkboxes.forEach(function (elem) {
    if (elem.checked || rangeHouse.value > 5000000 || rangeRegion.value > 0) {
      form.submit();
    } else {
      messageError.style.display = 'block';
    }
  });
});
//# sourceMappingURL=calculator.js.map
