import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors } from "../../Redux/actions";
import Doctor from './Doctor';
import SearchBar from '../NavBar/SearchBar';
import { Link } from 'react-router-dom';
import Paged from "../Paged";
import './doctors.css';
import CitySearch from "../NavBar/CitySearch";


export default function Doctors() {

  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [searchCity, setSearchCity] = useState('');


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
  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  }

  const [toShow, setToShow] = useState(10); 
  
  const handleLoadMore = () => {
      setToShow(toShow + 10);
    };

  
const filteredDoctors = doctors.filter(doctor =>
    doctor.name.includes(searchTerm) &&
    (selectedSpeciality === "" || doctor.speciality === selectedSpeciality)
  );
  
  const sortedDoctors = filteredDoctors.length > 0 ? filteredDoctors.slice(0, toShow).sort((a, b) => {
    
    if (selectedOption === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);


  const handleCity = (city) =>{
    setSearchCity(city);
  }

  const handleClearFilters = () => {
    document.getElementById("campo_de_entrada").value = "";
    document.getElementById("campo_de_ciudad").value = "";

    setSelectedOption("");
    setSearchTerm("");
    setSelectedSpeciality("");
    setSearchCity('');
    console.log('searchCity:'+searchCity);

  }
  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);

  }

  const [toShow, setToShow] = useState(10);

  const handleLoadMore = () => {
    setToShow(toShow + 10);
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.split(' ').some(namePart =>
      namePart.toLowerCase().startsWith(searchTerm.toLowerCase())
    ) &&
    (selectedSpeciality === "" || doctor.speciality === selectedSpeciality) &&
    (searchCity === '' || (doctor.address && doctor.address.toLowerCase().startsWith(searchCity.toLowerCase())))
  );

  const sortedDoctors = filteredDoctors.length > 0 ? filteredDoctors.slice(0, toShow).sort((a, b) => {

    if (selectedOption === "asc") {
      return a.name.localeCompare(b.name);
    } else if (selectedOption === "desc") {
      return b.name.localeCompare(a.name);
    } else {
      return 0;


    }
  }) : filteredDoctors;

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (


    <div> 
      <div className="search-nav">     
      <SearchBar onSearch={handleSearch}/>
      <label>
        Ordenar por nombre:
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label>
      
<label>
  Especialidad:
  <select value={selectedSpeciality} onChange={handleSpecialityChange}>
    <option value="">Todas</option>
    <option value="clinic">clinico</option>
    <option value="neurologist">neurologo</option>
    <option value="neurosurgeon">neurocirujano</option> 
  </select>
</label>

<Link to={`/home`}>
     <button> Volver </button>
</Link>     

      <button onClick={handleClearFilters}>Limpiar filtros</button>
      
      </div>

      {doctors.length === 0 ? (
      <div>No hay doctores disponibles</div>
    ) : (
      <>

        <div className="profesionals">Nuestros profesionales</div>

        <div className="doctors-list"> 
        {sortedDoctors.map((doctor) => (
         
          <Link key={doctor.id} className='doctor-item' to={`/doctors/${doctor.id}`}>
            <Doctor 
            name={doctor.name}
            email={doctor.email}
            address={doctor.address}
            phone={doctor.phone}
            speciality={doctor.speciality}
            
            />
          </Link>
         
        ))}

      </div>
      </>
    )}



          <Paged onClick={handleLoadMore} total={filteredDoctors.length} shown={toShow} />


    </div>
  );
}