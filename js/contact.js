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
const numberOfChildren = document.querySelector("#children");
const newInputsEl = document.querySelector(".newInputs");
const responseToForm = document.querySelector("#contact-response");

//skapar nya inputs om användaren anger att den har mer än ett barn
numberOfChildren.addEventListener("change", function () {
    newInputsEl.innerHTML = "";

    const childrenSum = Number(numberOfChildren.value); //omvandlar värdet till nummer

    for (let i = 2; i <= childrenSum; i++) { //startar på två, eftersom vi redan har ett fält
        const newAgeInput = document.createElement("input");
        newAgeInput.type = "number";
        newAgeInput.min = "0";
        newAgeInput.max = "99";
        newAgeInput.placeholder = "0";

        newInputsEl.appendChild(newAgeInput);
    }
});


function validateForm() {
    const nameInput = document.querySelector("#name").value;
    const emailInput = document.querySelector("#email").value;
    const errorEl = document.querySelector("#error");

    errorEl.innerHTML = "";
    document.querySelector("#name").style.border = "none";
    document.querySelector("#email").style.border = "none";

    let errorArr = [];

    if (nameInput.trim() === "") {
        errorArr.push(`Du måste ange ett namn`);

        document.querySelector("#name").style.border = "2px solid red";
    }

    if (emailInput.trim() === "") {
        errorArr.push(`Ange en e-postadress så att vi kan nå er`);

        document.querySelector("#email").style.border = "2px solid red";
    }

    errorArr.forEach(error => {
        const errorUl = document.createElement("ul");
        const errorLi = document.createElement("li");
        const errorText = document.createTextNode(error);

        console.log(errorArr);

        errorLi.appendChild(errorText);
        errorUl.appendChild(errorLi);
        errorEl.appendChild(errorUl);
    });

    if (errorArr.length > 0) {
        return false;
    }

    return true;
}


function respond() {
    const response = document.createElement("p");
    response.innerHTML = (`Tack för visat intresse! <br><br> Vi kommer
    att kontakta er så snart vi kan!`);

    responseToForm.appendChild(response);
}


//eventlyssnare för kontaktformuläret
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    responseToForm.innerHTML = "";
    if (validateForm() === true) {

        respond();
    } console.log("VI kom ända hit");
});