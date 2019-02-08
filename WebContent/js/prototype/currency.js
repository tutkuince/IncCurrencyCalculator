function Currency(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://api.exchangeratesapi.io/latest?base=";
    this.amount = null;

    this.xhr = new XMLHttpRequest();
}

Currency.prototype.exchange = function (callback) {
    this.xhr.open("GET", this.url + this.firstCurrency, true);

    this.xhr.onload = () => {
        if (this.xhr.status) {
            const data = JSON.parse(this.xhr.responseText);
            const parity = data["rates"][this.secondCurrency];
            const result = this.amount * parity;
            callback(null, result);
        } else {
            callback("An error occurred!", null);
        }
    };

    this.xhr.send();

}

Currency.prototype.changeAmount = function (newAmount) {
    this.amount = newAmount;
}

Currency.prototype.changeFirstCurrency = function (newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
}

Currency.prototype.changeSecondCurrency = function (newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
}