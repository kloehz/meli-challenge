import useCurrency from '../../hooks/useCurrency';
import { Item } from '../../types/getItems';
import { useHistory } from 'react-router-dom';

export const ItemsContainer = ({id, picture, title, price, seller_address}: Item) => {

    const history = useHistory();

    const handleClick = () => {
            history.push({pathname: `/items/${id}`});
    }

    return (
        <div className="product-container" onClick={handleClick}>
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
