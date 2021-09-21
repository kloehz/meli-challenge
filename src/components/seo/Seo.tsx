import { Helmet } from "react-helmet"

interface ITitle {
    title?: string
}

export const Seo = ({title}: ITitle) => {


    return (
        <Helmet>
            <title>{`${title} | Mercado Libre`}</title>
            {title !== 'Inicio'
                ? <meta
                    name="description"
                    content={`Encontra ${title} con increibles ofertas online`}
                    />
                : <meta
                    name="description"
                    content="La comunidad de compra y venta online más grande de América Latina."
                    />
            }
        </Helmet>
    )
}
