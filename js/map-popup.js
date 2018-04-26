'use strict';

(function () {
  var open = document.querySelector('.open-map');
  var popupMap = document.querySelector('.modal-map');

  var close = popupMap.querySelector('.modal-close');

  open.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show');

    document.addEventListener('keydown', onPopupEscPress);
  });

  var closeMap = function () {
    popupMap.classList.remove('modal-show');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeMap();
  });

  var onPopupEscPress = function (evt) {
    window.utils.isEscEvent(evt, closeMap);
  };
})();
