import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as queryString from "query-string";
import { IGetItems } from '../types/getItems';
import useCurrency from '../hooks/useCurrency';


export const Items = () => {
        
    const location = useLocation<IGetItems>();
    const { q: item } =  queryString.parse(location.search);
    const { items } = location.state;


    return (
        <div className="items-container">
            <h2>caterogias</h2>
            {
                items.map(({picture, price}) => {
                    return (
                        <div>
                            <img src={picture} height="150px"/>
                            <h3>{useCurrency({...price})}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
