class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;

        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange() {
        return new Promise((resolve, reject) => {
           fetch(this.url + this.firstCurrency)
               .then(response => {
                   if (!response.ok)
                       throw new Error("An error occurred!");

                   return response.json();
               })
               .then(data => {
                   const parity = data["rates"][this.secondCurrency];
                   const result = Number(this.amount) * parity;
                   resolve(result);
               })
               .catch(err => reject(err));
        });
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