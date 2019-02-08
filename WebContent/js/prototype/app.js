// Prototype, Ajax, Callback

// Select elements
const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");

eventListeners();

function eventListeners() {
    amount.addEventListener("input", exchangeCurrency);

    firstCurrency.onchange = function () {
        currency.changeFirstCurrency(firstCurrency.value);
    };

    secondCurrency.onchange = function () {
        currency.changeSecondCurrency(secondCurrency.value);
    }
}

const currency = new Currency(firstCurrency.value, secondCurrency.value);

function exchangeCurrency() {
    currency.changeAmount(amount.value);
    currency.exchange(function (err, response) {
        if (err === null)
            console.log(response);
        else
            console.log(err);
    });
}