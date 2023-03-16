import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors } from "../Redux/actions";
import Doctor from './Doctor';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Paged from "./Paged";


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

<Link to={`/home`}>
     <button> Back Home</button>
</Link>     

      <button onClick={handleClearFilters}>Clean filters</button>
      
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

          <Paged onClick={handleLoadMore} total={filteredDoctors.length} shown={toShow} />

    </div>
  );
}