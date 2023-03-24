
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../Redux/actions";
import User from './User';
import SearchBar from '../NavBar/SearchBar';
import { Link } from 'react-router-dom';
import Paged from "../Paged";
import './users.css';
<<<<<<< HEAD
=======
import NavBar from "../NavBar/NavBar";
>>>>>>> 231ab867989f39de916893ad4dcdd6bba44f9338


export default function Users() {

  const dispatch = useDispatch();
  const pacientes = useSelector((state) => state.pacientes);
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

  const [toShow, setToShow] = useState(5); 
  
  const handleLoadMore = () => {
      setToShow(toShow + 5);
    };
  
    const filteredUsers = pacientes.filter(user => {
      const fullName = user.nombre.toLowerCase();
      const term = searchTerm.toLowerCase();
      return fullName.startsWith(term) || fullName.endsWith(term) || fullName.includes(` ${term}`)})
      .filter(user => {
      if (!selectedAge) {
        return true; // no se ha seleccionado un rango de edad, mostrar todos los usuarios
      } else if (selectedAge === "0-25") {
        return user.edad < 25;
      } else if (selectedAge === "25-50") {
        return user.edad >= 25 && user.edad <= 50;
      } else if (selectedAge === "50+") {
        return user.edad > 50;
      } else{
        return 0;
      }
    })
    .filter(user=>{
      if(!selectedGender){
        return true;
      } else if(selectedGender ==='femenino'){
        return user.genero === 'femenino'
      } else if (selectedGender=== 'masculino'){
        return user.genero === 'masculino';
      }else{
        return 0;
      }
    });
    
  const sortedUsers = filteredUsers.length > 0 ? filteredUsers.slice(0, toShow).sort((a, b) => {
    
    if (selectedOption === "asc") {
      return a.nombre.localeCompare(b.nombre);
    } else if (selectedOption === "desc"){
      return b.nombre.localeCompare(a.nombre);
    } else {
      return 0;
    }
  }) : filteredUsers;


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (

    <div className="Users-main">

<NavBar/>

<div className='colorsito'>
      <div className="search-nav-u">  

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
    <option value='femenino'>Mujer</option>
    <option value='masculino'>Hombre</option>
</select>
</label>
      <div className="filtros-user" onClick={handleClearFilters} >Limpiar filtros</div>
      
      <Link to={`/home`} className="filtros-user" >
     Volver 
      </Link>  

      </div>
      </div>


      <div className="Users-title" >Pacientes </div>

    <div className="users">
     
     
      {sortedUsers.map((user) => (
        
        <Link key={user.id} to={`/users/${user.id}`}>
          
          <User 
            // id={user.id}
            genero={user.genero} 
            nombre={user.nombre} 
            edad={user.edad} 
            imagen={user.imagen} 
            direccion={user.direccion} 
          />

     
        </Link>
       
     ))}
</div>


        <Paged onClick={handleLoadMore} total={filteredUsers.length} shown={toShow} />

    </div>
  );
}

