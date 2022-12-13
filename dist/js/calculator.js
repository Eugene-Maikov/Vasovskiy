"use strict";

var outputHouse = document.querySelector('#rangeValueHouse');
var outputRegion = document.querySelector('#rangeValueRegion');
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
}
//# sourceMappingURL=calculator.js.map
