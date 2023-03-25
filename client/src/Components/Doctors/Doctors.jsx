import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors } from "../../Redux/actions";
import Doctor from './Doctor';
import SearchBar from '../NavBar/SearchBar';
import { Link } from 'react-router-dom';
import Paged from "../Paged";
import './doctors.css';
import CitySearch from "../NavBar/CitySearch";
import NavBar from "../NavBar/NavBar";

export default function Doctors() {

  const dispatch = useDispatch();
  const doctores = useSelector((state) => state.doctores);
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

  const [toShow, setToShow] = useState(6);

  const handleLoadMore = () => {
    setToShow(toShow + 6);
  };
  console.log(typeof doctores); 
  const filteredDoctors = doctores.filter(doctor =>
    doctor.nombre.split(' ').some(namePart =>
      namePart.toLowerCase().startsWith(searchTerm.toLowerCase())
    ) &&
    (selectedSpeciality === "" || doctor.especialidad === selectedSpeciality) &&
    (searchCity === '' || (doctor.direccion && doctor.direccion.toLowerCase().startsWith(searchCity.toLowerCase())))
  );

  const sortedDoctors = filteredDoctors.length > 0 ? filteredDoctors.slice(0, toShow).sort((a, b) => {

    if (selectedOption === "asc") {
      return a.nombre.localeCompare(b.nombre);
    } else if (selectedOption === "desc") {
      return b.nombre.localeCompare(a.nombre);
    } else {
      return 0;
    }
  }) : filteredDoctors;

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (

    <div>
      <NavBar/>
      <div className="colorsito">
      <div className="search-nav">
        <SearchBar onSearch={handleSearch} />
        <CitySearch onSearch={handleCity}/>
        <label>
          Ordenar alfabéticamente:
          <select value={selectedOption} onChange={handleSelectChange}>
            <option default value=''> </option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </label>

        <label>
          Especialidad:
          <select value={selectedSpeciality} onChange={handleSpecialityChange}>
            <option value=""></option>
            <option value="Cirujano">Cirujano</option>
            <option value="Neurólogo">neurologo</option>
            <option value="neurocirujano">neurocirujano</option>
          </select>
        </label>

        <Link to={`/home`}>
          <button> Volver </button>
        </Link>

        <button onClick={handleClearFilters}>Limpiar filtros</button>
        </div>
      </div>

      {doctores.length === 0 ? (
        <div>No hay doctores disponibles</div>
      ) : (
        <>
          <div className="profesionals">Nuestros profesionales</div>
          <div className="cartilla">
            <div value='columnas'>Nombre</div>
            <div value='columnas'>Email</div>
            <div value='columnas'>Ciudad</div>
            <div value='columnas'> Teléfono</div>
            <div value='columnas'>Especialidad</div>
          </div>

          <div className="doctors-list">
            {sortedDoctors.map((doctor) => (

              <Link key={doctor.id} className='doctor-item' to={`/doctors/${doctor.id}`} id={doctor.id} >
                <Doctor
                  nombre={doctor.nombre}
                  correo={doctor.correo}
                  direccion={doctor.direccion}
                  telefono={doctor.telefono}
                  especialidad={doctor.especialidad}
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