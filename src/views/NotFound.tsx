import { Link } from 'react-router-dom'
import NotFoundSvg from '../assets/images/NotFound.svg'

export const NotFound = () => {

    return (
        <div className="not-found-container">
            <img src={NotFoundSvg} />
            <h3>La pagina solicitada no existe</h3>
            <Link to="/" className="not-found-link">Ir a la pagina principal</Link>
        </div>
    )
}
