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
        li.prepend(check)
        check.addEventListener("change", function(e)
        {
            if (check.checked)
            {
                li.style.textDecoration = "line-through"
            }
            else
            {
                li.style.textDecoration = "none"
            }

        })
    currentList.prepend(li)
    
    var newTask = new Task(li.innerText)
    tasks += newTask
    console.log(tasks[0].text)
    inputField.value = null
}
function UpdateList(){
    //Loop through list and check if checkbox is ticked or not.
}
class Task
{   
    constructor(text)
    {
        var text = text
    }
}
