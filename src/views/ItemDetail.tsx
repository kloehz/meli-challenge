import { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";
import { apiGetItemDetails } from "../api/itemDetail";
import { IGetItemDetail, Item } from "../types/getItemDetail";
import { Spinner } from "../components/loader/Spinner";
import useCurrency from "../hooks/useCurrency";

export const ItemDetail = () => {

    const location = useLocation<IGetItemDetail>();
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState<Item>();
    const [price, setPrice] = useState<string>('');

    useEffect(() => {
        apiGetItemDetails(location.pathname.slice(7, location.pathname.length)).then((res) => {
            setItem(res.data.item);
            setPrice(() => useCurrency(res.data.item.price));
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false);
        });
    }, []);

    return (
            (
                isLoading
                ? <Spinner />
                : <div className="item-detail-page">
                    <div className="item-detail-container">
                            <div className="item-image-price-container">
                                <img src={item.picture}/>
                                <div className="item-detail-to-buy-container">
                                    <span className="item-detail-condition-selled" >
                                        {item.condition} - {item.sold_quantity} vendido(s)
                                    </span>
                                    <h1 className="item-detail-title">
                                        {item.title}
                                    </h1>
                                    <span className="item-detail-price">
                                        {price}
                                    </span>
                                <button className="item-detail-buy-button">Comprar</button>
                                </div>
                            </div>
                            <div className="item-detail-description-container">
                                <div>
                                    <span>
                                        Descripcion del producto
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                    </div>
                </div>
            )
    )
}
