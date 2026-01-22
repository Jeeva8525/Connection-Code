const nameInputBox = document.getElementById("nameInputBox");
const ageInputBox = document.getElementById("ageInputBox");
const displayItems = document.getElementById('displayContainer');

function displayDetails(){
    const name = nameInputBox.value;
    const age = parseInt(ageInputBox.value);

    let nameElement = document.createElement('p');
    nameElement.textContent = 'Hello '+name+'!';
    let ageElement = document.createElement('p');
    ageElement.textContent = age>=18?'You are an Adult':'You are a child';

    displayItems.append(nameElement);
    displayItems.append(ageElement);
}

const submitButton = document.getElementById("submitButton");

let formContainer = document.getElementById("formContainer");
formContainer.addEventListener('submit',function (event){
    event.preventDefault();
    displayDetails();
})