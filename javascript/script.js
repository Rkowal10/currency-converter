{
    const exchangeUSD = (value, currency2) => {
        switch (currency2) {
            case "USD":
                return value;
            case "PLN":
                return value * 5.53;
            case "EUR":
                return value * 1.03;
            case "GBP":
                return value * 0.9;
            case "CHF":
                return value * 0.9984;
        }
    }

    const exchangePLN = (value, currency2) => {
        const usd = 4.89;
        const euro = 4.84;
        const gbp = 5.53;
        const chf = 4.98;

        switch (currency2) {
            case "PLN":
                return value;
            case "USD":
                return value / usd;
            case "EUR":
                return value / euro;
            case "GBP":
                return value / gbp;
            case "CHF":
                return value / chf;
        }
    }

    const exchangeEUR = (value, currency2) => {
        switch (currency2) {
            case "EUR":
                return value;
            case "USD":
                return value * 0.9694;
            case "PLN":
                return value * 4.84;
            case "GBP":
                return value * 0.8766;
            case "CHF":
                return value * 0.9678;
        }
    }

    const exchangeGBP = (value, currency2) => {
        switch (currency2) {
            case "GBP":
                return value;
            case "USD":
                return value * 1.1052;
            case "PLN":
                return value * 5.53;
            case "EUR":
                return value * 1.1406;
            case "CHF":
                return value * 1.1040;
        }
    }
    
    const currencyExchange = (value, currency1, currency2) => {
        
        switch (currency1) {
            case "USD":
               return exchangeUSD(value, currency2);
            case "PLN":
                return exchangePLN(value, currency2);
            case "EUR":
                return exchangeEUR(value, currency2);
            case "GBP":
                return exchangeGBP(value, currency2);
            case "CHF":
                switch (currency2) {
                    case "CHF":
                        return value;
                    case "USD":
                        return value * 1.0011;
                    case "PLN":
                        return value * 4.98;
                    case "EUR":
                        return value * 1.0327;
                    case "GBP":
                        return value * 0.9059;
                }
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueElement = document.querySelector(".js-value");
        const resultElement = document.querySelector(".js-result");
        const currencyElement1 = document.querySelector(".js-currency1");
        const currencyElement2 = document.querySelector(".js-currency2");

        const value = +valueElement.value;
        const currency1 = currencyElement1.value;
        const currency2 = currencyElement2.value;
        const result = currencyExchange(value, currency1, currency2);

        resultElement.innerHTML = `${result.toFixed(2)} ${currency2}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}