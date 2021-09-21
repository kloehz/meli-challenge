import useCurrency from '../../hooks/useCurrency';
import { Item } from '../../types/getItems';
import { useHistory } from 'react-router-dom';
import { Prices } from '../prices/Prices';

export const ItemsContainer = ({id, picture, title, price, seller_address}: Item) => {

    const history = useHistory();

    const handleClick = () => {
            history.push({pathname: `/items/${id}`});
    };

    const parsedPrice = useCurrency({...price});

    return (
        <div className="product-container" onClick={handleClick}>
            <div className="item-image-container">
                <img src={picture} />
            </div>
        <div className="title-container">
            <Prices price={parsedPrice} style='item' />
                <h4>{title}</h4>
            </div>
            <div className="seller-address-container">
                <h4 className="seller-address">{seller_address}</h4>
            </div>
        </div>
    )
}
