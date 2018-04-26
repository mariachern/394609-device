'use strict';

(function () {
  var open = document.querySelector('.btn-message');
  var popup = document.querySelector('.modal-message');

  var close = popup.querySelector('.modal-close');
  var form = popup.querySelector('.message-form');
  var userName = popup.querySelector('[name=user-name]');
  var userEmail = popup.querySelector('[name=user-email]');
  var userMessage = popup.querySelector('[name=user-message]');

  var storageUserName = localStorage.getItem('userName');
  var storageUserEmail = localStorage.getItem('userEmail');

  open.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    if (storageUserName && storageUserEmail) {
      userName.value = storageUserName;
      userEmail.value = storageUserEmail;
      userMessage.focus();
    } else if (storageUserName) {
      userName.value = storageUserName;
      userEmail.focus();
    } else {
      userName.focus();
    }
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (userName.value) {
      localStorage.setItem('userName', userName.value);
    }
    if (userEmail.value) {
      localStorage.setItem('userEmail', userEmail.value);
    }
    closePopup();
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
        userName.classList.remove('invalid-item');
        userEmail.classList.remove('invalid-item');
        userMessage.classList.remove('invalid-item');
      }
    }
  });

  var closePopup = function () {
    popup.classList.remove('modal-show');
    form.reset();
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    window.utils.isEscEvent(evt, closePopup);
  };

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });
})();
