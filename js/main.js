"use strict";

//element för menysystem
const menuEl = document.querySelector(".menu");
const hamburgerButton = document.querySelector("#hamburgerMenu");
const wideScreen = window.matchMedia("(min-width: 860px)");

//eventlyssnare för menyn
hamburgerButton.addEventListener("click", function () {
    menuEl.classList.toggle("open");
});

//element för formulär på indexsidan
const questionForm = document.querySelector("#question-form");
const analyzeButton = document.querySelector("#analyze-button");
const resultsText = document.querySelector(".results-text");
const resultsHeader = document.querySelector(".results-header");
let formAnswers = document.querySelector(".form-answers");
let concentrationCheck = document.querySelector("#concentration");

//funktioner för formulär på indexsidan
function validateCheckboxes() {

//om de är icheckade - returnera true och gå tillbaka till checkformInput

//om inga rutor är icheckade- gör texten röd:
    
    resultsText.style.color = "red";

    return false;
}


//Det användaren ska få ut om den fyller i åtminstone en ruta
function checkFormInput() {

    resultsHeader.textContent = `Resultat:`;
    resultsText.textContent = `Baserat på vad ni har angett er intresserade av kan vi
hjälpa till med bland annat det här:`

    const ulEl = document.createElement("ul");
    ulEl.classList.add("results-list");
    formAnswers.appendChild(ulEl);

//här är för den första rutan, fler rutor får läggas till under sedan
    if (concentrationCheck.checked === true) {
        const liEl = document.createElement("li");
        const liText = document.createTextNode(`Förslag på fokus`);

        liEl.appendChild(liText);
        ulEl.appendChild(liEl);

        const liEl2 = document.createElement("li");
        const liText2 = document.createTextNode(`Sitta stilla`);

        liEl2.appendChild(liText2);
        ulEl.appendChild(liEl2);

    }
    else { return }
}


//Eventlyssnaren för en knapp som ska läsa av vilka rutor som är ikryssade i formulär
analyzeButton.addEventListener("click", function (event) {
    event.preventDefault();

    //här vill jag att den tittar om några rutor är ikryssade innan den går vidare
    //if (validateCheckboxes() === true){}

    checkFormInput();
});


