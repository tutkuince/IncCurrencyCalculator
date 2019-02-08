// fetch, promise

const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");

eventListeners();

function eventListeners() {
    amount.addEventListener("input", exchangeCurrency);
    firstCurrency.onchange = function () {

    };
    secondCurrency.onchange = function () {

    };
}

function exchangeCurrency() {

}