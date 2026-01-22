// console.log(inputBox);
const displayList=document.getElementById("displayList");

let liItem;
const inputBox = document.getElementById("inputBox");
console.log(inputBox);

inputBox.addEventListener("keydown",(event) => {
    if(event.key === 'Enter'){
        addListItem();
    }
})

function addListItem(){
    liItem = document.createElement("li");
    liItem.textContent = inputBox.value;
    displayList.append(liItem);

    inputBox.value = "";
}