

// --------------------------- WELLNESS --------------------------
const formWellnessPrep = document.querySelector("#wellnessPrep");
const inputWellnessPrep = document.querySelector("#wellnessPrepName");
const listWellnessPrep = document.querySelector("#wellnessButtons");
// const listWellnessPrep = document.querySelector("#wellnessListTemp");
// const listWellnessBulk = document.querySelector("#wellnessButtons");

formWellnessPrep.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputWellnessPrep.value.length > 0) {
        const animalName = inputWellnessPrep.value;
        console.log(animalName);
        // const newLI = document.createElement("LI");
        // newLI.innerText = `${animalName}`;
        // listWellnessPrep.append(newLI);
        const newBTN = document.createElement("BUTTON");
        newBTN.innerText = `${animalName}`;
        newBTN.classList.add("buttonWellnessList");
        newBTN.id = animalName;
        listWellnessPrep.append(newBTN);
        inputWellnessPrep.value = "";
        newBTN.addEventListener("click", function (event) {
            event.preventDefault();
            const currentTime = time();
            const newLI = document.createElement("LI");
            newLI.innerText = `${animalName} arrived at ${currentTime}`;
            listWellness.append(newLI);
            newBTN.disabled = true;
        });
    } else {
        //do nothing
    }

});

const formWellness = document.querySelector("#formWellness");
const inputWellness = document.querySelector("#nameWellness");
const listWellness = document.querySelector("#wellnessOrder");
formWellness.addEventListener("submit", function (event) {
    event.preventDefault();
    const currentTime = time();
    console.log(currentTime);
    const petName = inputWellness.value;
    console.log(petName);
    const newLI = document.createElement("LI");
    newLI.innerText = `${petName} arrived at ${currentTime}`;
    listWellness.append(newLI);
    inputWellness.value = "";
});

// --------------------------- FINALIZATION --------------------------
const formFinalPrep = document.querySelector("#finalizationPrep");
const inputFinalPrep = document.querySelector("#finalizationPrepName");
const listFinalPrep = document.querySelector("#finalizingButtons");
const listFinal = document.querySelector("#finalizingOrder");
formFinalPrep.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputFinalPrep.value.length > 0) {
        const animalName = inputFinalPrep.value;
        console.log(animalName);
        const newBTN = document.createElement("BUTTON");
        newBTN.innerText = `${animalName}`;
        newBTN.classList.add("buttonFinalizationList");
        newBTN.id = animalName;
        listFinalPrep.append(newBTN);
        inputFinalPrep.value = "";
        newBTN.addEventListener("click", function (event) {
            event.preventDefault();
            const currentTime = time();
            const newLI = document.createElement("LI");
            newLI.innerText = `${animalName} arrived at ${currentTime}`;
            listFinal.append(newLI);
            newBTN.disabled = true;

        });
    } else {
        //do nothing
    }

});

const formFinal = document.querySelector("#formFinalization");
const inputFinal = document.querySelector("#nameFinalization");
formFinal.addEventListener("submit", function (event) {
    event.preventDefault();
    const currentTime = time();
    console.log(currentTime);
    const petName = inputFinal.value;
    console.log(petName);
    const newLI = document.createElement("LI");
    newLI.innerText = `${petName} arrived at ${currentTime}`;
    listFinal.append(newLI);
    inputFinal.value = "";
});



// Time function to capture current time
function time() {
    var currentdate = new Date();
    var timenow = + currentdate.getHours() + ":"
        + currentdate.getMinutes()
    return timenow;
}


//  STICKY SIDEBAR 
const sidebar = document.querySelector("#checkInOrder");







// Bulk Modal
//  ---------------- this should probably be a loop. revisit----

// Get the modal
var modal = document.querySelector("#bulkAddModal");
var intakeModal = document.querySelector("#intakeModal");

// Buttons for Modals
// let modalBtns = document.querySelectorAll(".modal")
// for (let btn of modalBtns){
//     let span = document.querySelectorAll(".close");

var bulkBtn = document.getElementById("bulkBtn");
var intakeBtn = document.querySelector("#intakeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
bulkBtn.onclick = function () {
    modal.style.display = "block";
}
intakeBtn.onclick = function () {
    intakeModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    intakeModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == intakeModal) {
        intakeModal.style.display = "none";
    }
}


