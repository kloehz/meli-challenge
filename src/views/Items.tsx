import { useLocation } from 'react-router-dom';
import * as queryString from "query-string";
import { IGetItems } from '../types/getItems';
import { useCapitalize } from '../hooks/useCapitalize';
import { ItemsContainer } from '../components/items/ItemsContainer';
import { Categories } from '../components/items/Categories';
import { Seo } from '../components/seo/Seo';
import { NotResuts } from '../components/items/NotResuts';


export const Items = () => {
        
    const location = useLocation<IGetItems>();
    const { q: title } =  queryString.parse(location.search);
    const { items, categories } = location.state;
    const capitalizedTitle = useCapitalize(title.toString());

    return (
        <>
            <Seo title={capitalizedTitle} />
            <div className="items-page">
                <div className="items-container">
                    {
                        categories.length > 0 && <Categories categories={categories}/>
                    }
                    {
                        items.length ? items.map((item) => {
                            return <ItemsContainer key={item.id} {...item} />
                        })
                        : <NotResuts />
                    }
                </div>
            </div>
        </>
    )
}
