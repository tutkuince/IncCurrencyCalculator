class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;

        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    async exchange() {
        const response = await fetch(this.url + this.firstCurrency);
        const data = await response.json();
        const parity = data["rates"][this.secondCurrency];
        const result = Number(this.amount) * parity;
        return result;
    }

    changeAmount(newAmount) {
        this.amount = newAmount;
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}