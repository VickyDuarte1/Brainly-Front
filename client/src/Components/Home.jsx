import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/actions";
import User from './User';
import SearchBar from './SearchBar';

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [showUsers, setShowUsers]= useState(false);
  const [selectedOption, setSelectedOption] = useState("asc");
  const [searchTerm, setSearchTerm] = useState('');

  const handleShowUsers = () =>{
    setShowUsers(true);
  }

  const handleHideUsers = () => {
    setShowUsers(false);
  };

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

  const filteredUsers = users.filter(user => user.login.includes(searchTerm));

  const sortedUsers = filteredUsers.length > 0 ? filteredUsers.sort((a, b) => {
    if (selectedOption === "asc") {
      return a.login.localeCompare(b.login);
    } else {
      return b.login.localeCompare(a.login);
    }
  }) : filteredUsers;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Bienvenido al home </h1>
      {!showUsers && (
        <button onClick={handleShowUsers}>Mostrar usuarios</button>
      )}

      {showUsers && (
        <>
          <button onClick={handleHideUsers}>Ocultar usuarios</button>
          <SearchBar onSearch={handleSearch}/>
          <label>
            Ordenar por nombre:
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </label>
          <button onClick={handleClearFilters}>Limpiar filtros</button>

          {sortedUsers.map((user) => (
            <User key={user.id} login={user.login} />
          ))}
        </>
      )}
    </div>
  );
}