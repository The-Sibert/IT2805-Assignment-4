let inputField = document.getElementById("input")
let addEntryBtn = document.getElementById("addEntry")
let currentList = document.getElementById("list")

addEntryBtn.addEventListener("click", addTasks)
function addTasks()
{
    let li = document.createElement("li")
    li.innerText = inputField.value
    li.style.listStyleType = "none"
    let check = document.createElement("input")
    check.type = "checkBox"
    li.appendChild(check)
    currentList.insertBefore(li, currentList.firstChild)
    inputField.value = null
    
}
function UpdateList(){
    
}
