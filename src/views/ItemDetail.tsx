import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiGetItemDetails } from "../api/itemDetail";
import { IGetItemDetail } from "../types/getItemDetail";
import { Spinner } from "../components/loader/Spinner";

export const ItemDetail = () => {

    const location = useLocation<IGetItemDetail>();
    console.log(location.pathname.slice(7, location.pathname.length));
    const [isLoading, setIsLoading] = useState(true);
    let item: IGetItemDetail

    useEffect(() => {
        apiGetItemDetails(location.pathname.slice(7, location.pathname.length)).then((res) => {
            console.log(res.data);
            item = res.data;
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false);
        });
    }, []);

    return (
            (
                isLoading
                ? <Spinner />
                : <div>

                </div>
            )
    )
}
