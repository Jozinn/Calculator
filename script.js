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
    if(result == "Pamietaj cholero nie dziel przez zero") return result;
    result = result.toString();
    if(result.length > 10) {
        result = +result;
        result = result.toPrecision(10);
    };
    return result;
}
function equals(num1, num2, op) {
    if(num1 == null || op == null) return;
    num2 = +display.textContent;
    display.textContent = operate(num1, num2, op);
    a = null;
    b = null;
    operation = null;
    document.querySelector(".clicked").classList.remove("clicked");
}
const keypad = document.getElementById("keypad");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const negation = document.getElementById("negation");
const percent = document.getElementById("percent");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
const substraction = document.getElementById("substraction");
const addition = document.getElementById("addition");
const equal = document.getElementById("equal");
let operation;
let a;
let b;
keypad.addEventListener("click", e => {
    let target = e.target;
    if(target.id == "clear") return;
    if(target.id == "negation") return;
    if(target.id == "percent") return;
    if(target.id == "division") return;
    if(target.id == "multiplication") return;
    if(target.id == "substraction") return;
    if(target.id == "addition") return;
    if(target.id == "equal") return;
    if(operation != null) display.textContent = "";
    if(display.textContent === "0") display.textContent = "";
    display.textContent += target.textContent;
})
clear.addEventListener("click", () => {
    a = null;
    b = null;
    operation = null;
    if(document.querySelector(".clicked")) document.querySelector(".clicked").classList.remove("clicked");
    display.textContent = "0";
});
negation.addEventListener("click", () => display.textContent = -(+display.textContent));
percent.addEventListener("click", () => display.textContent = +display.textContent / 100);
division.addEventListener("click", () => {
    if(operation != null) equals(a, b, operation);
    division.classList.add("clicked");
    a = +display.textContent;
    operation = "/";
});
multiplication.addEventListener("click", () => {
    if(operation != null) equals(a, b, operation);
    multiplication.classList.add("clicked");
    a = +display.textContent;
    operation = "*";
});
substraction.addEventListener("click", () => {
    if(operation != null) equals(a, b, operation);
    substraction.classList.add("clicked");
    a = +display.textContent;
    operation = "-";
});
addition.addEventListener("click", () => {
    if(operation != null) equals(a, b, operation);
    addition.classList.add("clicked");
    a = +display.textContent;
    operation = "+";
});
equal.addEventListener("click", () => equals(a, b, operation));
