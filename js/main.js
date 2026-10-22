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
    const boxesInput = document.querySelectorAll(".boxes");
    
    let checkedBoxes = 0;

    boxesInput.forEach((eachCheckbox) => {
        if (eachCheckbox.checked) {
            checkedBoxes++;
        console.log(checkedBoxes);
}});

if(checkedBoxes === 0){
    resultsText.style.color = "red";
        return false;
    }

    return true;
}


//Det användaren ska få ut om den fyller i åtminstone en ruta
function checkFormInput() {

    resultsHeader.textContent = `Resultat:`;
    resultsText.textContent = `Baserat på vad ni har angett er intresserade av kan vi
hjälpa till med bland annat det här:`

    const ulEl = document.createElement("ul");
    ulEl.classList.add("results-list");
    formAnswers.appendChild(ulEl);

    const answerArr = [];

    //här är för den första rutan, fler rutor får läggas till under sedan
    if (concentrationCheck.checked === true) {
        answerArr.push(`Förslag på fokus`);
        answerArr.push(`Sitta stilla`);
    }

    if (document.querySelector("#emotion").checked === true) {
        answerArr.push(`Gråta mindre`);
        answerArr.push(`Vara tystare`);
    }

    answerArr.forEach(answer => {
        const liEl= document.createElement("li");
        const liText = document.createTextNode(answer);

        liEl.appendChild(liText);
        formAnswers.appendChild(liEl);
    })
}


//Eventlyssnaren för en knapp som ska läsa av vilka rutor som är ikryssade i formulär
analyzeButton.addEventListener("click", function (event) {
    event.preventDefault();
    resultsHeader.innerHTML = "";
resultsText.innerHTML = `Fyll i formuläret ovan för att få några exempel på vad vi
 kan hjälpa till med
inom respektive intresseområde <br><br> Eller:`
formAnswers.innerHTML = "";
    if (validateCheckboxes() === true) {
        checkFormInput();
    }
});


