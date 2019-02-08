// fetch, promise

const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");

eventListeners();

function eventListeners() {
    amount.addEventListener("input", exchangeCurrency);
    firstCurrency.onchange = function () {
        currency.changeFirstCurrency(firstCurrency.value);
        ui.changeUI(firstCurrency);
    };
    secondCurrency.onchange = function () {
        currency.changeSecondCurrency(secondCurrency.value);
        ui.changeUI(secondCurrency);
    };
}

const currency = new Currency(firstCurrency.value, secondCurrency.value);
const ui = new UI();

function exchangeCurrency() {
    currency.changeAmount(amount.value);
    currency.exchange()
        .then(data => ui.displayResult(data))
        .catch(err => console.log(err));
}