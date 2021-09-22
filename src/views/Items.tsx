import { useLocation } from 'react-router-dom';
import * as queryString from "query-string";
import { IGetItems } from '../types/getItems';
import { useCapitalize } from '../hooks/useCapitalize';
import { ItemsContainer } from '../components/items/ItemsContainer';
import { Categories } from '../components/items/Categories';
import { Seo } from '../components/seo/Seo';
import { NotResuts } from '../components/items/NotResuts';
import { useEffect, useState } from 'react';
import { apiGetItems } from '../api/searchItem';
import { Spinner } from '../components/loader/Spinner';


export const Items = () => {
        
    const location = useLocation<IGetItems>();
    const { q: title } =  queryString.parse(location.search);
    const [data, setData] = useState<IGetItems>()
    const capitalizedTitle = useCapitalize(title.toString());

    // TODO hacer llamada al ws
    useEffect(() => {
        if (!location.state ) {
            apiGetItems(title.toString()).then(res => {
                setData(res.data);
            })
        } else {
            setData(location.state);
        };
    }, []);
        
    return (
        data
        ? <>
            <Seo title={capitalizedTitle} />
            <div className="items-page">
                <div className="items-container">
                    {
                        data.categories.length > 0 && <Categories categories={data.categories}/>
                    }
                    {
                        data.items.length ? data.items.map((item) => {
                            return <ItemsContainer key={item.id} {...item} />
                        })
                        : <NotResuts />
                    }
                </div>
            </div>
        </>
        : <Spinner />
    )
}
