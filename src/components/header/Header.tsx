import { useState, } from 'react';
import SearchImage from "../../assets/images/SearchImage.svg";
import { useHistory, useLocation } from "react-router-dom";
import { apiGetItems } from '../../api/searchItem';
import * as queryString from "query-string";


export const Header = () => {
  const [input, setInput] = useState('');
  const history = useHistory();
  const location  = useLocation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput(input.trim());

    const { q: title } =  queryString.parse(location.search);
    const currentLocation = location.pathname.slice(1, location.pathname.length);
    const sameSearch = input === title && "items" === currentLocation;

    if(input.length >= 1 && !sameSearch){
      apiGetItems(input).then((res) => {
        history.push({pathname: "/items", search: `?q=${input}`, state: res.data })
      })
    }
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value[0] !== ' '){
      setInput(e.target.value);
    }
  }

  const goHome = () => {
    setInput('');
    history.push('/');
  }

  return (
    <div className="header-container">
      <div className="header">
        <img
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png"
          onClick={goHome}
          className="logo-img"
        />
        <form className="input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-header"
            placeholder="Nunca dejes de buscar"
            onChange={e => handleInputChange(e)}
            value={input}
          />
          <button type="submit" className="search-button">
            <img
              src={SearchImage}
              className="search-icon"
            />
          </button>
        </form>
      </div>
    </div>
    )
}
