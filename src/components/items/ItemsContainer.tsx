import useCurrency from '../../hooks/useCurrency'
import { Item } from '../../types/getItems'

export const ItemsContainer = ({picture, title, price, seller_address}: Item) => {
    return (
        <div className="product-container">
            <img
                src={picture}
                className="item-image"
            />
        <div className="title-container">
                <h3>{useCurrency({...price})}</h3>
                <h4>{title}</h4>
            </div>
            <h4 className="seller-address">{seller_address}</h4>
        </div>
    )
}
