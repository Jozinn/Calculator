function add(a, b) {
    let result = a + b;
    return result;
}
function substract(a, b) {
    let result = a - b;
    return result;
}
function multiply(a, b) {
    let result = a * b;
    return result;
}
function divide(a, b) {
    if(b == 0) return "Pamietaj cholero nie dziel przez zero";
    else {
        let result = a / b;
        return result;
    }
}
function operate(a, b, operation) {
    let result;
    switch(operation) {
        case "+": result =  add(a, b);
        break;
        case "-": result = substract(a, b);
        break;
        case "*": result = multiply(a, b);
        break;
        case "/": result =  divide(a, b);
        break;
    }
    return result;
}

const keypad = document.getElementById("keypad");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const negation = document.getElementById("negation");
const percent = document.getElementById("percent");
keypad.addEventListener("click", e => {
    let target = e.target;
    if(target.id == "clear") return;
    if(target.id == "negation") return;
    if(target.id == "percent") return;
    if(display.textContent === "0") display.textContent = "";
    display.textContent += target.textContent;
})
clear.addEventListener("click", () => display.textContent = "0");
negation.addEventListener("click", () => display.textContent = -(+display.textContent));
percent.addEventListener("click", () => display.textContent = +display.textContent / 100);