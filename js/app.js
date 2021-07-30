const calcForm = document.querySelector(".calc__form");
const productsInput = calcForm.querySelector("#products");
const ordersInput = calcForm.querySelector("#orders");
const packageInput = calcForm.querySelector("#package > div");
const packageListInput = calcForm.querySelector("#package > ul");
// const  arrowImg = calcForm.querySelector('div.select__input::after');

const ulCalcSummary = document.querySelector(".calc__summary>ul")
const productsOutput = ulCalcSummary.querySelector("li:first-child")
const ordersOutput = ulCalcSummary.querySelector("li:nth-child(2)");
const packageOutput = ulCalcSummary.querySelector("li:nth-child(3)");
console.log(packageListInput.children);

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
        let order = new Order(this.value);
        ordersOutput.children[1].innerText = order.itemCalc;
        ordersOutput.children[2].innerText = "$"+order.itemPrice;
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
            packageOutput.children[2].innerText = "$" + selectedPackage.itemPrice[i]
        });
    };
});

