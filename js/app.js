const calcForm = document.querySelector(".calc__form");
const productsInput = calcForm.querySelector("#products");
const ordersInput = calcForm.querySelector("#orders")

const ulCalcSummary = document.querySelector(".calc__summary>ul")
const productsOutput = ulCalcSummary.querySelector("li:first-child")
const ordersOutput = ulCalcSummary.querySelector("li:nth-child(2)");
console.log(ordersOutput);

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
    return number >= 0 || typeof (number) === Number;
}

productsInput.addEventListener("keyup", function (event){
    if (validation(this.value)){
           productsOutput.style.display = "flex";
           let product = new Product(this.value);
           productsOutput.children[1].innerText = product.itemCalc;
           productsOutput.children[2].innerText = "$"+product.itemPrice;
    }
});

ordersInput.addEventListener("keyup", function (event){
    if (validation(this.value)){
        ordersOutput.style.display = "flex";
        let order = new Product(this.value);
        ordersOutput.children[1].innerText = order.itemCalc;
        ordersOutput.children[2].innerText = "$"+order.itemPrice;
    }
});