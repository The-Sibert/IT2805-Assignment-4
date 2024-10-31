/* Task  1.2 */
console.log('Task  1.2')
for (i = 1; i <= 20; i++)
    {
        console.log(i)
    }
// Task  1.3
console.log('Task  1.3')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(i = 0; i < numbers.length; i++)
{
    if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
        console.log("eplekake")
    }
    else if(numbers[i] % 3 == 0){
         console.log("eple")   
    }
    else if(numbers[i] % 5 == 0){
        console.log("kake")
    }
    else{
        console.log(numbers[i])
    }       
}
/* Task  1.4 */
let title = document.getElementById("title")
title.innerText = "Hello Javascript"
/* Task  1.5 */
let btns = document.getElementsByClassName("buttons")[0]
let displayBtn = btns.firstElementChild
let visibilityBtn = btns.children[1]
let resetBtn = btns.lastElementChild
let magic = document.getElementById("magic")
displayBtn.addEventListener("click", changeDisplay)
visibilityBtn.addEventListener("click", changeVisibility)
resetBtn.addEventListener("click", reset)

function changeDisplay(){
    magic.style.display = "none"
}
function changeVisibility(){
    magic.style.visibility = "hidden"
    magic.style.display = "block"
}
function reset(){
    magic.style = null
}
/* Task 1.6 */
let ul = document.getElementById("tech")
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
for (i = 0; i <= technologies.length; i++)
{
    let li = document.createElement("li")
    li.innerText = technologies[i]
    ul.appendChild(li)
    
}
