//function for adding task
function addTask(){
    let input = document.getElementById("taskInput");     //creating a variable that would save the task input values
    let task = input.value.trim();
    if (task !== ""){
        let unorderedList = document.getElementById("taskList");
        let list = document.createElement("li");  // creating a child element that would hold the task input 
        list.textContent = task;
        list.addEventListener("contextmenu", toEditTask);
        unorderedList.appendChild(list);
        input.value = "";
    }
}


//function for deleting task
document.getElementById("taskList").addEventListener("dblclick", function(event){
    if (event.target.tagName === "LI"){
        event.target.remove();
    }
});

//function for editing and updating added tasks
function toEditTask(event){
    let newText = prompt("Edit selected task:", event.target.textContent);
    if (newText !== null){
        event.target.textContent = newText;
    }
    
}