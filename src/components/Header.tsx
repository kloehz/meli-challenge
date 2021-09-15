import { memo, useState } from 'react';
import SearchImage from "../assets/images/SearchImage.svg";

interface ISetProducts {
  setProducts: React.Dispatch<React.SetStateAction<any[]>>
}

export const Header = memo(({setProducts}: ISetProducts) => {

  const [input, setInput] = useState('');

  const getProducts = () => {
    setInput(input.trim());

    if(input.length >= 1){
        console.log('resultado: ');
        setProducts(['product']);
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
