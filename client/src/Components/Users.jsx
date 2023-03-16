import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/actions";
import User from './User';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Paged from "./Paged";
import './users.css';


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

  const [toShow, setToShow] = useState(10); 
  
  const handleLoadMore = () => {
      setToShow(toShow + 10);
    };

  const filteredUsers = users.filter(user => user.name.includes(searchTerm));
  const sortedUsers = filteredUsers.length > 0 ? filteredUsers.slice(0, toShow).sort((a, b) => {
    
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

    <div className="Users-main">
        
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
     <button> Volver </button>
      </Link>  
      <div className="Users-title" >Usuarios:</div>

    <div className="users">
     
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

        <Paged onClick={handleLoadMore} total={filteredUsers.length} shown={toShow} />

    </div>
  );
}