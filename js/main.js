"use strict";
const menuEl = document.querySelector(".menu");
const hamburgerButton = document.querySelector("#hamburgerMenu");
const wideScreen = window.matchMedia("(min-width: 860px)");

hamburgerButton.addEventListener("click", function() {
    menuEl.classList.toggle("open");
})