import { Item } from "../../types/getItemDetail"
import { Seo } from "../seo/Seo";
import { ImagePriceContainer } from "./ImagePriceContainer";
import { ItemDetailDescription } from "./ItemDetailDescription";

export const ItemDetailContainer = (props: Item) => {
    return (
            <>
                <Seo title={props.title}/>
                <div className="item-detail-container">
                    <ImagePriceContainer {...props} />
                    <ItemDetailDescription  description={props.description} />
                </div>
            </>
    )
}
