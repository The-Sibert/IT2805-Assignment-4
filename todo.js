let inputField = document.getElementById("input")
let addEntryBtn = document.getElementById("addEntry")
let currentList = document.getElementById("list")
let tasks = []

addEntryBtn.addEventListener("click", addTasks)
function addTasks()
{
    let li = document.createElement("li")
        li.innerText = inputField.value
        li.style.listStyleType = "none"
    let check = document.createElement("input")
        check.type = "checkBox"
        li.appendChild(check)
    currentList.prepend(li)
    
    var task = new Task(li.innerText)
    tasks += task
    console.log(tasks[1].text)
    inputField.value = null
}
function UpdateList(){
    //Loop throug list and check if checkbox is ticked or not.
}
class Task
{
    
    constructor(text)
    {
        this.text = text
    }
}
