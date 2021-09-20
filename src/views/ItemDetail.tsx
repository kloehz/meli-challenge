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
            console.log(res.data.item)
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
                                <img src={item.picture} className="item-detail-image"/>
                                <div className="item-detail-condition-selled">
                                <h6>
                                    {item.condition} - {item.sold_quantity} vendido(s)
                                </h6>
                                <h6 className="item-detail-title">
                                    {item.title}
                                </h6>
                                <h6>
                                    {price}
                                </h6>
                                </div>
                            </div>
                    </div>
                </div>
            )
    )
}
