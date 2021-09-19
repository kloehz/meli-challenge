import { getCurrency } from "../constants/currency";
import { Price } from "../types/getItems";


const useCurrency = ({currency, amount, decimals}: Price) => {
    const currencyType = getCurrency(currency);
    let newAmount: string;
    // Podria usar Intl.NumberFormat pero no diferencia $ de U$S
    // Si ponemos currencyDisplay muestra en texto la moneda, no en simbolo
    if ( decimals === 0 ){
        newAmount = amount.toString() + '.00';
    } else {
        newAmount = (amount + decimals/100).toString()
    }

    return `${currencyType} ${newAmount}`;
}

export default useCurrency;