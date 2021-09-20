import { getCurrency } from "../constants/currency";
import { Price } from "../types/getItems";


const useCurrency = ({currency, amount, decimals}: Price) => {
    const currencyType = getCurrency(currency);
    let newAmount: string;
    if ( decimals === 0 ){
        newAmount = new Intl.NumberFormat().format(amount) + '.00'
    } else {
        newAmount = (new Intl.NumberFormat().format(amount + decimals/100)).toString()
    }

    return `${currencyType} ${newAmount}`;
}

export default useCurrency;