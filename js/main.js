"use strict";
const menuEl = document.querySelector(".menu");
const hamburgerButton = document.querySelector("#hamburgerMenu");
const wideScreen = window.matchMedia("(min-width: 860px)");

hamburgerButton.addEventListener("click", function() {
    menuEl.classList.toggle("open");
})

const questionForm = document.querySelector("#question-form");
const analyzeButton = document.querySelector("#analyze-button");
const resultsText = document.querySelector("#results-text");
let concentrationCheck = document.querySelector("#concentration");




function checkFormInput() {

resultsText.textContent = `Resultat:`;

    if (concentrationCheck.checked === true) {
        console.log("Yup");
        }
        else {return}
    }

analyzeButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    checkFormInput();
});