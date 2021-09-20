import { Item } from "../../types/getItemDetail"
import { ImagePriceContainer } from "./ImagePriceContainer";
import { ItemDetailDescription } from "./ItemDetailDescription";

export const ItemDetailContainer = (props: Item) => {


    return (
            <div className="item-detail-container">
                <ImagePriceContainer {...props} />
                <ItemDetailDescription  description={props.description} />
            </div>
    )
}
