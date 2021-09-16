import { memo, useState } from 'react';
import SearchImage from "../assets/images/SearchImage.svg";
import { useHistory } from "react-router-dom";
import { apiGetItems } from '../api/searchItem';


export const Header = memo(() => {

  const [input, setInput] = useState('');
  const history = useHistory();

  const getProducts = () => {
    setInput(input.trim());

    if(input.length >= 1){
      apiGetItems(input).then((res) => {
        history.push({pathname: "/items", search: `?q=${input}`, state: {...res.data} })
      })
    }
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value[0] !== ' '){
      setInput(e.target.value);
    }
  }

  return (
    <div className="header">
      <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__large_plus.png" />
      <div className="input-container">
        <input
          type="text"
          className="input-header"
          placeholder="Nunca dejes de buscar"
          onChange={e => handleInputChange(e)}
          value={input}
        />
        <img
          src={SearchImage}
          className="search-icon"
          onClick={getProducts}
        />
      </div>
    </div>
    )
})
