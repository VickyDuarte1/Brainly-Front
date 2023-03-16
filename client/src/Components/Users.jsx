import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/actions";
import User from './User';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Users() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedOption, setSelectedOption] = useState("asc");
  const [searchTerm, setSearchTerm] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const handleSearch = (term) => {
    setSearchTerm(term);
  }
  const handleClearFilters = () => {
    setSelectedOption("asc");
    setSearchTerm("");
  }
  const filteredUsers = users.filter(user => user.name.includes(searchTerm));
  const sortedUsers = filteredUsers.length > 0 ? filteredUsers.sort((a, b) => {
    
    if (selectedOption === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  }) : filteredUsers;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (

    <div>
        
      <SearchBar onSearch={handleSearch}/>
      <label>
        Ordenar por nombre:
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label>
      <button onClick={handleClearFilters}>Limpiar filtros</button>
      <Link to={`/home`}>
     <button> Back Home</button>
      </Link>  



      <div>Users List:</div>
      {sortedUsers.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <User 
            // id={user.id}
            gender={user.gender} 
            name={user.name} 
            age={user.age} 
            image={user.image} 
            city={user.city} 
          />
        </Link>
      ))}
    </div>
  );
}