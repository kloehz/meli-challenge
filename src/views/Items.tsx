import { useLocation } from 'react-router-dom';
import * as queryString from "query-string";
import { IGetItems } from '../types/getItems';
import {Helmet} from "react-helmet";
import { useCapitalize } from '../hooks/useCapitalize';
import { ItemsContainer } from '../components/items/ItemsContainer';
import { Categories } from '../components/items/Categories';


export const Items = () => {
        
    const location = useLocation<IGetItems>();
    const { q: title } =  queryString.parse(location.search);
    const { items, categories } = location.state;
    const capitalizedTitle = useCapitalize(title.toString());

    return (
        <>
        {/* Temporal / Prueba */}
            <Helmet>
                <title>{capitalizedTitle} | Mercado Libre</title>
            </Helmet>
            <div className="items-container">
                {
                    categories && <Categories categories={categories}/>
                }
                {
                    items.map((item) => {
                        return <ItemsContainer key={item.id} {...item} />
                    })
                }
            </div>
        </>
    )
}
