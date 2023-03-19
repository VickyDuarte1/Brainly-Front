import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      props.onSearch(term);
      console.log('term:'+term);
    };
  
    return (
      <form >
        <label>
          Buscar por nombre:
          <input type="text" id="campo_de_entrada" onChange={handleInputChange} />
        </label>
       
      </form>
    );
  }