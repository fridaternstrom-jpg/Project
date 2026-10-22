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

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.querySelector("#name").value;
    console.log(`Hej ${nameInput}`);
});