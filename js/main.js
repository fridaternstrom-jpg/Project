"use strict";
const hiddenMenu = document.querySelector(".hiddenlinks");
const hamburgerButton = document.querySelector("#hamburgerMenu");
const wideScreen = window.matchMedia("(width <=860px)");


hamburgerButton.addEventListener("click", function() {
    
    if(wideScreen.matches){
        return;
    }

    if (hiddenMenu.style.display === "none") {
        hiddenMenu.style.display = "block";
    } else {
        hiddenMenu.style.display = "none";
    }
});