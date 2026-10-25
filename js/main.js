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
//den här kontrollerar om minst en ruta är ikryssad
function validateCheckboxes() {
    const boxesInput = document.querySelectorAll(".boxes");
    
    let checkedBoxes = 0;

    boxesInput.forEach((eachCheckbox) => {      //kör igenom alla rutor och se vilka som är ikryssade
        if (eachCheckbox.checked) {
            checkedBoxes++;
}});

if(checkedBoxes === 0){                         //om ingen är kryssad, låt användaren se att den kan kryssa i för att få svar
    resultsText.style.color = "red";
        return false;
    }

    return true;
}


//Det användaren ska få ut om den fyller i åtminstone en ruta
function checkFormInput() {

    resultsHeader.textContent = `Resultat:`;            //skriver ut till DOM
    resultsText.style.color = "black";
    resultsText.textContent = `Baserat på vad ni har angett er intresserade av kan vi
hjälpa till med bland annat det här:`


    const ulEl = document.createElement("ul");
    formAnswers.appendChild(ulEl);

    const answerArr = [];       //tom array för svar på rutor

    //om rutan är ikryssad, skicka svar till arrayen
    if (document.querySelector("#concentration").checked === true) {
        answerArr.push(`Planering av vardagsstruktur`);
        answerArr.push(`Råd för avslappning, vila och aktivitet`);
    }

    if (document.querySelector("#emotion").checked === true) {
        answerArr.push(`Impulskontroll och känsloreglering - individuell utredning`);
    }

    if (document.querySelector("#life").checked === true) {
        answerArr.push(`Genomgång av familjens förutsättningar för en bättre vardag`);
        answerArr.push(`Hembesök och strukturell planering därefter`);
    }

    if (document.querySelector("#sleep").checked === true) {
        answerArr.push(`Praktiska tips och råd vid sömnproblem`);
    }

    if (document.querySelector("#communication").checked === true) {
        answerArr.push(`AKK - alternativ kommunikation, när inte talet räcker`);
        answerArr.push(`Gruppträffar med andra i liknande situation`);
    }

    if (document.querySelector("#rules").checked === true) {
        answerArr.push(`Lågaffektivt bemötande - vad betyder det egentligen?`);
        answerArr.push(`Information om skärmtid, regler och krav`);
    }

    answerArr.forEach(answer => {                   //gör listelement av alla svar och skriv ut
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
    //neutraliserar eventuell röd text och rensar
resultsText.innerHTML = `Fyll i formuläret ovan för att få några exempel på vad vi
 kan hjälpa till med
inom respektive intresseområde <br><br> Eller:`
formAnswers.innerHTML = "";
    if (validateCheckboxes() === true) {        //om minst en ruta är ikryssad gå igenom formuläret
        checkFormInput();
    }
});


