let plnElement = document.querySelector(".js-pln");
let usdElement = document.querySelector(".js-usd");
let euroElement = document.querySelector(".js-euro");
let gbpElement = document.querySelector(".js-gbp");
let chfElement = document.querySelector(".js-chf");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let nameElement = document.querySelector(".js-name");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let pln = +plnElement.value;
    let usd = +usdElement.value;
    let euro = +euroElement.value;
    let gbp = +gbpElement.value;
    let chf = +chfElement.value;
    let result;
    let name;

    if (usdElement.checked === true) {
        result = pln / usd;
        name = "USD";
    } else if (euroElement.checked === true) {
        result = pln / euro;
        name = "EUR";
    } else if (gbpElement.checked === true) {
        result = pln / gbp;
        name = "GBP";
    } else {
        result = pln / chf;
        name = "CHF";
    }


    resultElement.innerText = result.toFixed(2);
    nameElement.innerText =` ${name}`;
});