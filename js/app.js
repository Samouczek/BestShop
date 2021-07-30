const calcForm = document.querySelector(".calc__form");
const productsInput = calcForm.querySelector("#products");
const ordersInput = calcForm.querySelector("#orders");
const packageInput = calcForm.querySelector("#package > div");
const packageListInput = calcForm.querySelector("#package > ul");
// const  arrowImg = calcForm.querySelector('div.select__input::after');
const checkboxes = calcForm.querySelectorAll('.form__checkbox')
const accountingInput = checkboxes[0];
const terminalInput = checkboxes[1];

const ulCalcSummary = document.querySelector(".calc__summary>ul")
const productsOutput = ulCalcSummary.querySelector("li:first-child")
const ordersOutput = ulCalcSummary.querySelector("li:nth-child(2)");
const packageOutput = ulCalcSummary.querySelector("li:nth-child(3)");
const accountingOutput = ulCalcSummary.querySelector("li:nth-child(4)")
const terminalOutput = ulCalcSummary.querySelector("li:nth-child(5)");
const totalNumber = document.querySelector("#total-price");

let total = 0;

function Total(){
    this.products = 0;
    this.orders = 0;
    this.packages = 0;
    this.accounting = 0;
    this.terminal = 0;
}

function Product(quantity){
    this.itemCalc = quantity + " * $0.5";
    this.itemPrice = quantity * 0.5;
}
function Order(quantity){
    this.itemCalc = quantity + " * $0.5";
    this.itemPrice = quantity * 0.5;
}
function Package(){
    this.itemCalc = ["Basic", "Professional", "Premium"];
    this.itemPrice = [0,25,60];
}

function validation(number){
    return number >= 0 || typeof (number) === Number;
}

function changeOnNumber(price){
    let number = price.toString().substr(1,price.length);
    console.log(number);
    return parseFloat(number);
}

let totalSum = new Total();

productsOutput.children[2].innerText = "$0";
ordersOutput.children[2].innerText = "$0";
packageOutput.children[2].innerText = "$0";

function addTotal(){
    totalNumber.style.display = "block";
    totalNumber.style.position = "absolute";
    totalNumber.style.right = "0";
    totalNumber.style.bottom = "0";
    ulCalcSummary.parentElement.style.position = "relative";
    totalNumber.children[1].innerText = "$" + (totalSum.products + totalSum.orders + totalSum.packages +
        totalSum.accounting + totalSum.terminal);
}


productsInput.addEventListener("keyup", function (event){
    if (validation(this.value)){
            totalNumber.style.display="flex";
           productsOutput.style.display = "flex";
           let product = new Product(this.value);
           productsOutput.children[1].innerText = product.itemCalc;
           productsOutput.children[2].innerText = "$"+product.itemPrice;

            totalSum.products = product.itemPrice;
            addTotal();
    }
});

ordersInput.addEventListener("keyup", function (event){
    if (validation(this.value)){
        ordersOutput.style.display = "flex";
        let order = new Order(this.value);
        ordersOutput.children[1].innerText = order.itemCalc;
        ordersOutput.children[2].innerText = "$"+order.itemPrice;

        totalSum.orders = order.itemPrice;
        addTotal();
    }
});

packageInput.addEventListener("click",function (event){
    packageListInput.style.display = "block";
    //arrowImg.style.transform =  "rotate(180deg)";
    for(let i = 0; i< packageListInput.children.length; i++) {
        packageListInput.children[i].addEventListener("click",function (event) {
            packageListInput.style.display = "none";
            packageOutput.style.display="flex";
            let selectedPackage = new Package();
            packageOutput.children[1].innerText = selectedPackage.itemCalc[i];
            packageOutput.children[2].innerText = "$" + selectedPackage.itemPrice[i];

            totalSum.packages = selectedPackage.itemPrice[i];
            addTotal();

        });
    }
});

accountingInput.addEventListener("click", function (event){
    if (accountingInput.children[0].checked) {
        accountingOutput.style.display="flex";
        totalSum.accounting = changeOnNumber(accountingOutput.children[1].innerText);
        addTotal();
    } else {
        accountingOutput.style.display="none";
        totalSum.accounting = 0;
        addTotal();
    }

})

terminalInput.addEventListener("click", function (event){
    if (terminalInput.children[0].checked) {
        terminalOutput.style.display="flex";
        totalSum.terminal = changeOnNumber(terminalOutput.children[1].innerText);
        addTotal();
    } else {
        terminalOutput.style.display="none";
        totalSum.terminal = 0;
        addTotal();
    }


})




