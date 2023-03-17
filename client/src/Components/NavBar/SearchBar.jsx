import React from 'react';
import { useState } from 'react';

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      props.onSearch(term);
    };
  
    return (
      <form >
        <label>
          Buscar por nombre:
          <input type="text" value={searchTerm} onChange={handleInputChange} />
        </label>
       
      </form>
    );
  }