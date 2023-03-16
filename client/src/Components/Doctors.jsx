import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors } from "../Redux/actions";
import Doctor from './Doctor';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Doctors() {

  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const [selectedOption, setSelectedOption] = useState("asc");
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
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

  
const filteredDoctors = doctors.filter(doctor =>
    doctor.name.includes(searchTerm) &&
    (selectedSpeciality === "" || doctor.speciality === selectedSpeciality)
  );
  
  const sortedDoctors = filteredDoctors.length > 0 ? filteredDoctors.sort((a, b) => {
    
    if (selectedOption === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  }) : filteredDoctors;

  useEffect(() => {
    dispatch(getDoctors());
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
      
<label>
  Especialidad:
  <select value={selectedSpeciality} onChange={handleSpecialityChange}>
    <option value="">Todas</option>
    <option value="clinic">clinic</option>
    <option value="neurologist">neurologist</option>
    <option value="neurosurgeon">neurosurgeon</option>
    
  </select>
</label>

      <button onClick={handleClearFilters}>Limpiar filtros</button>
      
      {doctors.length === 0 ? (
      <div>No hay doctores disponibles</div>
    ) : (
      <>
        <div>Doctors List:</div>
        {sortedDoctors.map((doctor) => (
          <Link key={doctor.id} to={`/doctors/${doctor.id}`}>
            <Doctor 
            name={doctor.name}
            email={doctor.email}
            address={doctor.address}
            phone={doctor.phone}
            speciality={doctor.speciality}
            
            />
          </Link>
        ))}
      </>
    )}
    </div>
  );
}