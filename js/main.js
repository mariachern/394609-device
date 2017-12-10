var open = document.querySelector(".btn-message");
var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name=user-name]");
var userEmail = popup.querySelector("[name=user-email]");
var userMessage = popup.querySelector("[name=user-message]");

var storageUserName = localStorage.getItem("userName");
var storageUserEmail = localStorage.getItem("userEmail");
  
open.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
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

form.addEventListener("submit", function(evt) {
    if (!userName.value) {
        evt.preventDefault();
        userName.classList.add("invalid-item");
    }
    else {
      localStorage.setItem("userName", userName.value);
    }
});

form.addEventListener("submit", function(evt) {
    if (!userEmail.value) {
        evt.preventDefault();
        userEmail.classList.add("invalid-item");
    }
    else {
      localStorage.setItem("userEmail", userEmail.value);
    }
});

form.addEventListener("submit", function(evt) {
    if (!userMessage.value) {
        evt.preventDefault();
        userMessage.classList.add("invalid-item");
    }
});

form.addEventListener("submit", function(evt) {
    if (!userName.value || !userEmail.value || !userMessage.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    userName.classList.remove("invalid-item");
    userEmail.classList.remove("invalid-item");
    popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            userName.classList.remove("invalid-item");
            userEmail.classList.remove("invalid-item");
            userMessage.classList.remove("invalid-item");
        }
    }
});

var openMap = document.querySelector(".open-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

openMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");
        }
    }
});





