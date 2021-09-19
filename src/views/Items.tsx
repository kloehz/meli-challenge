import { useLocation } from 'react-router-dom';
import * as queryString from "query-string";
import { IGetItems } from '../types/getItems';
import useCurrency from '../hooks/useCurrency';
import {Helmet} from "react-helmet";
import { useCapitalize } from '../hooks/useCapitalize';


export const Items = () => {
        
    const location = useLocation<IGetItems>();
    const { q: title } =  queryString.parse(location.search);
    const { items } = location.state;
    const capitalizedTitle = useCapitalize(title.toString());

    return (
        <>
        {/* Temporal / Prueba */}
            <Helmet>
                <title>{capitalizedTitle} | Mercado Libre</title>
            </Helmet>
            <div className="items-container">
                <h2>caterogias</h2>
                {
                    items.map(({picture, price, id, title, seller_address}) => {
                        return (
                            <div key={id} className="product-container">
                                    <img src={picture} style={{
                                        width: '160px',
                                        height: '160px',
                                        objectFit: 'contain'
                                    }}/>
                                <div className="title-container">
                                    <h3>{useCurrency({...price})}</h3>
                                    <h4>{title}</h4>
                                </div>
                                <h4 style={{marginTop: '2em'}}>{seller_address}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
