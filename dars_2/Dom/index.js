let button = document.querySelector("#btn")
let number1 = document.querySelector("#num1")
let number2 = document.querySelector("#num2")
let sign = document.querySelector("#sign")
let display = document.querySelector("#display")

button.onclick = function(){
    let num1 = +number1.value
    let num2 = +number2.value
    switch(sign.value){
        case '+': {
            display.textContent = num1 + num2
            break
        }
        case '-': {
            display.textContent = num1 - num2
            break
        }
        case '*': {
            display.textContent = num1 * num2
            break
        }
        case '/': {
            display.textContent = num1 / num2
            break
        }
    }
}