import { Seo } from "../components/seo/Seo"

export const Home = () => {
    return (
        <>
            <Seo title={'Inicio'} />
            <div className="home-container">
                <img src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png' />
                <div className="home-title-container">
                    <h1>Challenge para</h1>
                    <h1 className="home-meli-word">&nbsp;MercadoLibre</h1>
                </div>
                <h2>De Guido Leonel Cotelesso</h2>
            </div>
        </>
    )
}