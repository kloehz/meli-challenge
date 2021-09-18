import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as queryString from "query-string";
import { IGetItems } from '../types/getItems';
import useCurrency from '../hooks/useCurrency';
import {Helmet} from "react-helmet";
import { useCapitalize } from '../hooks/useCapitalize';


export const Items = () => {
        
    const location = useLocation<IGetItems>();
    const { q: item } =  queryString.parse(location.search);
    const { items } = location.state;
    const capitalizedTitle = useCapitalize(item.toString());
    console.log(items)

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
                                <div style={{
                                    height: '200px',
                                    width: '200px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <img src={picture} style={{
                                        height: '200px',
                                        width:'200px',
                                        objectFit: 'contain'
                                    }}/>
                                </div>
                                <div>
                                    <h3>{useCurrency({...price})}</h3>
                                    <h4>{title}</h4>
                                </div>
                                <div>
                                    <h4>{seller_address}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
