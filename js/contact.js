"use strict";

//element för menysystem
const menuEl = document.querySelector(".menu");
const hamburgerButton = document.querySelector("#hamburgerMenu");
const wideScreen = window.matchMedia("(min-width: 860px)");

//eventlyssnare för menyn
hamburgerButton.addEventListener("click", function () {
    menuEl.classList.toggle("open");
});

//För kontaktformuläret på kontaktsidan
const contactForm = document.querySelector("#contact-form");
const errorEl = document.querySelector("#error");
const numberOfChildren = document.querySelector("#children");
const newInputsEl = document.querySelector(".newInputs");

numberOfChildren.addEventListener("input", function() {
    newInputsEl.innerHTML = "";

    const childrenSum = Number(numberOfChildren).value;

    for (let i = 1; i <= childrenSum; i++) {
        const newAgeInput = document.createElement("input");
        newAgeInput.type = "number";
        newAgeInput.min = "0";
        newAgeInput.max = "99";
        newAgeInput.classList.add("small-input");

        newAgeInput.appenChild(newInputsEl);
        childrenSum.appendChild(newInputsEl);
    }


});



contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.querySelector("#name").value;
    const emailInput = document.querySelector("#email").value;


});