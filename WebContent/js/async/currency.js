class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;

        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    async exchange() {
        const response = await fetch(this.url + this.firstCurrency);
        const data = response.json();
        console.log(data);
    }
}