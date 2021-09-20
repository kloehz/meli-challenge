import { getCurrency } from "../constants/currency";
import { Price } from "../types/getItems";


const useCurrency = ({currency, amount, decimals}: Price) => {
    const currencyType = getCurrency(currency);
    let newAmount: string;
    newAmount = new Intl.NumberFormat().format(Number(amount)).toString();
    const decimalsString = decimals === 0 ? `${decimals.toString()}0` : decimals.toString();

    return {currency: currencyType, amount, decimals: decimalsString};
}

export default useCurrency;