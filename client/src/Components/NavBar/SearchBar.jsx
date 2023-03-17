import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      props.onSearch(term);
    };
  
    // const handleFormSubmit = (event) => {
    //   event.preventDefault();
    //   props.onSearch(searchTerm);
    //   setSearchTerm('');
    // };
  
    return (
      <form >
        <label>
          Buscar por nombre:
          <input type="text" value={searchTerm} onChange={handleInputChange} />
        </label>
        <button type="submit">Buscar</button>
      </form>
    );
  }