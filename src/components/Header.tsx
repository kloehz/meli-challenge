import { memo, useState } from 'react';
import SearchImage from "../assets/images/SearchImage.svg";
import { useHistory } from "react-router-dom";
import { apiGetItems } from '../api/searchItem';


export const Header = () => {

  const [input, setInput] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput(input.trim());

    if(input.length >= 1){
      apiGetItems(input).then((res) => {
        console.log(res);
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
    )
}
