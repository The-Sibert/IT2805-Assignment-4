let inputField = document.getElementById("input")
let addEntryBtn = document.getElementById("addEntry")
let currentList = document.getElementById("list")
let tally = document.getElementById("tally")
let completed = 0
let notCompleted = 0
var tasks = []

addEntryBtn.addEventListener("click", addTasks)
updateTally(0)
function addTasks()
{
    notCompleted++
    updateTally(0)
    let li = document.createElement("li")
        li.innerText = inputField.value
        li.style.listStyleType = "none"
    let check = document.createElement("input")
        check.type = "checkBox"
        li.prepend(check)
        check.addEventListener("change", function(e){
            if(check.checked){
                li.style.textDecoration = "line-through"
                updateTally(1)
            }
            else{
                li.style.textDecoration = "none"
                updateTally(-1)
            }
        })
    currentList.prepend(li)
    var newTask = new Task(li.innerText)
    tasks += newTask
    inputField.value = null
}
function updateTally(one){//function for updating the tally visual
    completed += one
    tally.innerText = completed + "/" + notCompleted
}
class Task{   
    constructor(a)
    {
        let text = a
        console.log(text)
    }
}
