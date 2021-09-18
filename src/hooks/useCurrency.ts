import { getCurrency } from "../constants/currency";
import { Price } from "../types/getItems";


const useCurrency = ({currency, amount, decimals}: Price) => {
    const currencyType = getCurrency(currency);
    let setDecimals: string;
    if ( decimals === 0 ){
        setDecimals = '00';
    } else {
        setDecimals = decimals.toString();
    }
    return `${currencyType} ${amount}.${setDecimals}`;
}

export default useCurrency;