import { getCurrency } from "../constants/currency";
import { Price } from "../types/getItems";


const useCurrency = ({currency, amount, decimals}: Price) => {
    const currencyType = getCurrency(currency);
    let newAmount: string;
    // Podia usar Intl.NumberFormat pero no diferencia $ de U$S
    if ( decimals === 0 ){
        newAmount = amount.toString() + '.00';
    } else {
        newAmount = (amount + decimals/100).toString()
    }

    return `${currencyType} ${newAmount}`;
}

export default useCurrency;