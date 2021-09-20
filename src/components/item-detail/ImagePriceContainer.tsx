import useCurrency from "../../hooks/useCurrency";
import { Item } from "../../types/getItemDetail"
import { Prices } from "../prices/Prices";


export const ImagePriceContainer = ({picture, condition, sold_quantity, title, price}: Item) => {
    const parsedPrice = useCurrency({...price});
    return (
        <div className="item-image-price-container">
            <div className="item-detail-image-container">
                <img src={picture}/>
            </div>
            <div className="item-detail-to-buy-container">
                <span className="item-detail-condition-selled" >
                    {condition} - {sold_quantity} vendido(s)
                </span>
                <h1 className="item-detail-title">
                    {title}
                </h1>
                <Prices price={parsedPrice} style='item-detail' />
            <button className="item-detail-buy-button">Comprar</button>
            </div>
        </div>
    )
}
