const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const prioritySelect = document.getElementById("priority");

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let priorityDot = document.createElement("span");
        priorityDot.classList.add("priority-dot", `priority-${prioritySelect.value.toLowerCase()}`);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        li.appendChild(priorityDot);
        li.appendChild(span);
        listcontainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}




 listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
 }
 else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
 }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function Showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
Showtask();