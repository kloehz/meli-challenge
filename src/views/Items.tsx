import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as queryString from "query-string";
import { Products } from '../types/getItems';


export const Items = () => {
        
    const [products, setProducts] = useState<string[]>(['0']);
    const location = useLocation();
    console.log('oetruoe', location.state);
    const { q: item } =  queryString.parse(location.search)


    return (
        <>
            {
                products.map((product, id) => {
                    return <h2 key={id}>{product}</h2>
                })
            }
        </>
    )
}
