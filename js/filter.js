'use strict';

(function () {
  var BAR_WIDTH = 10000;

  var filterPrice = document.querySelector('.filter-price');

  var scale = filterPrice.querySelector('.scale');
  var bar = filterPrice.querySelector('.bar');
  var rangeControls = filterPrice.querySelector('.range-controls');
  var minToggle = filterPrice.querySelector('.toggle-min');
  var maxToggle = filterPrice.querySelector('.toggle-max');
  var minPrice = filterPrice.querySelector('.min-price');
  var maxPrice = filterPrice.querySelector('.max-price');

  var toggleHalfWidth = minToggle.offsetWidth / 2;

  var stepPriceRange = BAR_WIDTH / scale.offsetWidth;

  var setBarWidth = function (maxTgl, minTgl) {
    bar.style.width = maxTgl.offsetLeft - minTgl.offsetLeft + 'px';
    bar.style.left = minTgl.offsetLeft + 'px';
  };

  var setPriceValue = function (price, toggle) {
    price.textContent = ' ' + Math.round((toggle.offsetLeft + toggleHalfWidth) * stepPriceRange);
  };

  var onToggleMousedown = function (evt) {
    var target = evt.target;
    evt.preventDefault();
    var startCoords = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = startCoords - moveEvt.clientX;
      startCoords = moveEvt.clientX;

      var coordsRange = {
        maxToggle: {
          min: minToggle.offsetLeft + toggleHalfWidth,
          max: scale.offsetWidth - toggleHalfWidth
        },
        minToggle: {
          min: scale.offsetLeft - toggleHalfWidth,
          max: maxToggle.offsetLeft - toggleHalfWidth
        }
      };

      if (target === minToggle) {
        target.style.left = (target.offsetLeft - shift) + 'px';
        if (target.offsetLeft < coordsRange.minToggle.min) {
          target.style.left = coordsRange.minToggle.min + 'px';
        }
        if (target.offsetLeft > coordsRange.minToggle.max) {
          target.style.left = coordsRange.minToggle.max + 'px';
        }

        setPriceValue(minPrice, target);
      }

      if (target === maxToggle) {
        target.style.left = (target.offsetLeft - shift) + 'px';
        if (target.offsetLeft < coordsRange.maxToggle.min) {
          target.style.left = coordsRange.maxToggle.min + 'px';
        }
        if (target.offsetLeft > coordsRange.maxToggle.max) {
          target.style.left = coordsRange.maxToggle.max + 'px';
        }

        setPriceValue(maxPrice, target);
      }

      setBarWidth(maxToggle, minToggle);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  rangeControls.addEventListener('mousedown', onToggleMousedown);
})();
