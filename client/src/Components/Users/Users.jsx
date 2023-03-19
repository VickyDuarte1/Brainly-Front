import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../Redux/actions";
import User from './User';
import SearchBar from '../NavBar/SearchBar';
import { Link } from 'react-router-dom';
import Paged from "../Paged";
import './users.css';


export default function Users() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAge, setSelectedAge]= useState('');
  const [selectedGender, setSelectedGender]= useState('')
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  const handleClearFilters = () => {
    document.getElementById("campo_de_entrada").value = "";
    setSelectedOption("");
    setSearchTerm("");
    setSelectedAge("");
    setSelectedGender("");
    console.log('searchterm:'+ searchTerm);
  }

  const [toShow, setToShow] = useState(10); 
  
  const handleLoadMore = () => {
      setToShow(toShow + 10);
    };
  
    const filteredUsers = users.filter(user => {
      const fullName = user.name.toLowerCase();
      const term = searchTerm.toLowerCase();
      return fullName.startsWith(term) || fullName.endsWith(term) || fullName.includes(` ${term}`)})
      .filter(user => {
      if (!selectedAge) {
        return true; // no se ha seleccionado un rango de edad, mostrar todos los usuarios
      } else if (selectedAge === "0-25") {
        return user.age < 25;
      } else if (selectedAge === "25-50") {
        return user.age >= 25 && user.age <= 50;
      } else if (selectedAge === "50+") {
        return user.age > 50;
      } else{
        return 0;
      }
    })
    .filter(user=>{
      if(!selectedGender){
        return true;
      } else if(selectedGender ==='female'){
        return user.gender === 'female'
      } else if (selectedGender=== 'male'){
        return user.gender === 'male';
      }else{
        return 0;
      }
    });
    
  const sortedUsers = filteredUsers.length > 0 ? filteredUsers.slice(0, toShow).sort((a, b) => {
    
    if (selectedOption === "asc") {
      return a.name.localeCompare(b.name);
    } else if (selectedOption === "desc"){
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  }) : filteredUsers;


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (

    <div className="Users-main">

      <div className="search-nav">  

      <SearchBar onSearch={handleSearch}/>
      <label>
        Ordenar alfabéticamente:
        <select value={selectedOption} onChange={handleSelectChange}>
          <option default value=''> </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </label>

      <label>
  Filtrar por edad:
  <select value={selectedAge} onChange={(event) => setSelectedAge(event.target.value)}>
    <option value=""> </option>
    <option value="0-25">Menores de 25</option>
    <option value="25-50">Entre 25 y 50</option>
    <option value="50+">Mayores de 50</option>
  </select>
</label>

<label>
Filtrar por genero:
<select value={selectedGender} onChange={(event)=> setSelectedGender(event.target.value)}>
    <option value=''> </option>
    <option value='female'>Mujer</option>
    <option value='male'>Hombre</option>
</select>
</label>
      <button onClick={handleClearFilters} >Limpiar filtros</button>
      
      <Link to={`/home`}>
     <button> Volver </button>
      </Link>  

      </div>

      <div className="Users-title" >Usuarios </div>

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