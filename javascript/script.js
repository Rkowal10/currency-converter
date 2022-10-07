{
    const plnElement = document.querySelector(".js-pln");
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");
    const nameElement = document.querySelector(".js-name");
    const currencyElement = document.querySelector(".js-currency");

    const usd = 4.89;
    const euro = 4.84;
    const gbp = 5.53;
    const chf = 4.98;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const pln = +plnElement.value;
        let result;
        let name;
        const currency = currencyElement.value;

        switch (currency) {
            case "USD":
                result = pln / usd;
                name = "USD";
                break;
            case "EUR":
                result = pln / euro;
                name = "EUR";
                break;
            case "GBP":
                result = pln / gbp;
                name = "GBP";
                break;
            case "CHF":
                result = pln / chf;
                name = "CHF";
                break;
        }

        resultElement.innerText = result.toFixed(2);
        nameElement.innerText = ` ${name}`;
    });
}