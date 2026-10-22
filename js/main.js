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
    formAnswers.appendChild(ulEl);

    const answerArr = [];

    //här är för den första rutan, fler rutor får läggas till under sedan
    if (document.querySelector("#concentration").checked === true) {
        answerArr.push(`Förslag på fokus`);
        answerArr.push(`Sitta stilla`);
    }

    if (document.querySelector("#emotion").checked === true) {
        answerArr.push(`Gråta mindre`);
        answerArr.push(`Vara tystare`);
    }

    if (document.querySelector("#life").checked === true) {
        answerArr.push(`Råd om livet`);
        answerArr.push(`Bättre struktur`);
    }

    if (document.querySelector("#sleep").checked === true) {
        answerArr.push(`Sov mer`);
        answerArr.push(`Sov längre`);
    }

    if (document.querySelector("#communication").checked === true) {
        answerArr.push(`Prata mer`);
        answerArr.push(`Lyssna bättre`);
    }

    if (document.querySelector("#rules").checked === true) {
        answerArr.push(`Mer regler`);
        answerArr.push(`Strängare straff`);
    }

    answerArr.forEach(answer => {
        const liEl= document.createElement("li");
        const liText = document.createTextNode(answer);

        liEl.appendChild(liText);
        ulEl.appendChild(liEl);
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


