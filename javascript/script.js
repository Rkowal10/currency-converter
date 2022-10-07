{
    const plnElement = document.querySelector(".js-pln");
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");
    const currencyElement = document.querySelector(".js-currency");

    const currencyExchange = (pln, currency) => {
        const usd = 4.89;
        const euro = 4.84;
        const gbp = 5.53;
        const chf = 4.98;

        switch (currency) {
            case "USD":
                return pln / usd;
            case "EUR":
                return pln / euro;
            case "GBP":
                return pln / gbp;
            case "CHF":
                return pln / chf;
        }
    }

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const pln = +plnElement.value;
        const currency = currencyElement.value;
        let result = currencyExchange(pln, currency);

        resultElement.innerHTML =`${result.toFixed(2)} ${currency}`;
    });
}