import { getCurrency } from "../constants/currency";
import { Price } from "../types/getItems";

const useCurrency = ({currency, amount, decimals}: Price) => {
    const currencyType = getCurrency(currency);
    let newAmount: string;
    let decimalsString: string;

    newAmount = new Intl.NumberFormat().format(Number(amount)).toString();

    if (decimals === 0) {
        decimalsString = `${decimals.toString()}0`;
    } else if (decimals > 0 && decimals < 10) {
        decimalsString = `0${decimals.toString()}`;
    } else {
        decimalsString = decimals.toString();
    }

    return {currency: currencyType, amount: newAmount, decimals: decimalsString};
}

export default useCurrency;