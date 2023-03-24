import React from 'react';
import { useState } from 'react';

export default function CitySearch(props) {
    const [searchCity, setSearchCity] = useState('');
  
    const handleInputCity = (event) => {
      const city = event.target.value;
      setSearchCity(city);
      props.onSearch(city);
      console.log('city:'+city);
    };
  
    return (
      <form >
        <label>
          Buscar por ciudad:
          <input type="text" id="campo_de_ciudad" onChange={handleInputCity} />
        </label>  
      </form>
    );
  }