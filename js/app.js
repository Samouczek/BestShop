const calcForm = document.querySelector(".calc__form");
const productsInput = calcForm.querySelector("#products");

const ulCalcSummary = document.querySelector(".calc__summary>ul")
const productsOutput = ulCalcSummary.querySelector("li:first-child")
console.log(productsOutput);

function Product(quantity){
    this.itemCalc = quantity + " * $0.5";
    this.itemPrice = quantity * 0.5;
}
function Order(quantity){
    this.itemCalc = quantity + " * $0.5";
    this.itemPrice = quantity * 0.5;
}
function Package(){
    this.package = ["basic", "professional", "premium"];
    this.price = [0,25,60];
}

function validation(number){
    return number > 0 || typeof (number) === Number;
}

