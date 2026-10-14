"use strict";
const hiddenMenu = document.querySelector(".hiddenlinks");
const hamburgerButton = document.querySelector("#hamburgerMenu");

hamburgerButton.addEventListener("click", function() {
    if(hiddenMenu.style.display === "none") {
        hiddenMenu.style.display = "block";
    } else {
        hiddenMenu.style.display = "none";
    }
});