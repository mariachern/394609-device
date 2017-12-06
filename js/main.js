var open = document.querySelector(".btn-message");
var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userMessage = popup.querySelector("[name=user-message]");
  
open.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    userName.focus();
  });

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

form.addEventListener("submit", function(evt) {
    if (!userName.value || !userEmail.value || !userMessage) {
      evt.preventDefault();
      alert("Все поля должны быть заполнены");
    }
  });

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

var openMap = document.querySelector(".open-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

openMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
})

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
})

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");
        }
    }
});





