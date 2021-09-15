import { useState } from 'react';
import { Header } from '../components/Header';


export const Home = () => {
        
    const [products, setProducts] = useState<string[]>(['0']);

    return (
        <>
            <Header setProducts={setProducts}/>
            {
                products.map(product => {
                    return <h2>{product}</h2>
                })
            }
        </>
    )
}
