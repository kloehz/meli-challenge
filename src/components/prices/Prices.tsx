import { Price } from "../../types/getItems"

interface IPrice {
    price: Price,
    style: string
}

export const Prices = ({price, style}: IPrice) => {
    return (
        <div className={`${style}-price`}>
            <span className={`${style}-amount`}>{price.currency}{price.amount}</span>
            <span className={`${style}-decimals`}>{price.decimals}</span>
        </div>
    )
}
