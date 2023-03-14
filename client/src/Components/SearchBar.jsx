import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      props.onSearch(searchTerm);
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <label>
          Buscar usuario por login:
          <input type="text" value={searchTerm} onChange={handleInputChange} />
        </label>
        <button type="submit">Buscar</button>
      </form>
    );
  }