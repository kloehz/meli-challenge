import { Link } from 'react-router-dom'
import NotFoundSvg from '../assets/images/NotFound.svg'
import { Seo } from '../components/seo/Seo'

export const NotFound = () => {

    return (
        <>
            <Seo title="Not Found" />
            <div className="not-found-container">
                <img src={NotFoundSvg} />
                <h3 data-testid="not-found-text">La pagina solicitada no existe</h3>
                <Link
                    to="/"
                    className="not-found-link"
                >Ir a la pagina principal</Link>
            </div>
        </>
    )
}
