let inputField = document.getElementById("input")
let addEntryBtn = document.getElementById("addEntry")
let currentList = document.getElementById("list")
let entries = []
addEntryBtn.addEventListener("click", addCurrentEntry)
function addCurrentEntry()
{
    let li = document.createElement("li")
    li.innerText = inputField.value
    li.style.listStyleType = "none"
    let check = document.createElement("input")
    check.type = "radio"
    li.appendChild(check)
    currentList.appendChild(li)
    inputField.value = null
    entries += li
}
//TODO: Loop through each list item and check if the checkbox is marked, if it is update the style
// to hidden.

