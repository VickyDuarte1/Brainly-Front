import React, { useState, useEffect } from 'react';
import Comment from "../Comments/Comment";
import { getComments } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors } from "../../Redux/actions";
import Doctor from './Doctor';
import SearchBar from '../NavBar/SearchBar';
import { Link } from 'react-router-dom';
import CitySearch from "../NavBar/CitySearch";

import Paged from '../Paged';
import NavBrain from "../NavBar/NavBrain";
import Footer from "../Footer/Footer";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Doctores2() {

  const dispatch = useDispatch();


  const handleClick = () => {
    const section = document.getElementById("about");

    section.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedDoctor, setSelectedDoctor] = useState(null);



  const comments = useSelector((state) => state.comments)

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);


  const handleMoreClick = () => {
    const sectionMore = document.getElementById("beneficios");

    sectionMore.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const activeUser = JSON.parse(localStorage.getItem("activeUser"));



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

  const handleCity = (city) => {
    setSearchCity(city);
  }

  const handleClearFilters = () => {
    document.getElementById("campo_de_entrada").value = "";
    document.getElementById("campo_de_ciudad").value = "";

    setSelectedOption("");
    setSearchTerm("");
    setSelectedSpeciality("");
    setSearchCity('');
    console.log('searchCity:' + searchCity);

  }
  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);

  }

  const [toShow, setToShow] = useState(10);

  const handleLoadMore = () => {
    setToShow(toShow + 10);
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


  const [modalDemo, setModalDemo] = useState(false);

  const toggleModalDemo = () => {
    setModalDemo(!modalDemo);
  };






  return (
    <>
      <NavBrain />
      <div className="wrapper" id="home">

        <div className="doctores-pag">

          <div className="colorsito">

            <div className="search-nav">
              <div className='row-search-1'>
                <SearchBar onSearch={handleSearch} />
                <CitySearch onSearch={handleCity} />
              </div>


              <div className="row-search-2">
                <label>
                  Ordenar alfabéticamente:
                  <select className='input-style' value={selectedOption} onChange={handleSelectChange}>
                    <option default value=''> </option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                  </select>
                </label>

                <label>
                  Especialidad:
                  <select className='input-style' value={selectedSpeciality} onChange={handleSpecialityChange}>
                    <option value=""></option>

                    <option value="Cirujano">Cirujano</option>
                    <option value="Neurólogo">neurologo</option>
                    <option value="neurocirujano">neurocirujano</option>
                  </select>
                </label>
              </div>

              <div className=" buttons-search">
                <div className="btn1">
                  <Link to={`/home`}>
                    <Button className="button1" color="primary" > Volver </Button>
                  </Link>
                </div>
                <div className="btn2">
                  <Button className="button2" color="primary" onClick={handleClearFilters}>Limpiar filtros</Button>
                </div>
              </div>
            </div>
          </div>

          <th className="profesionals">Nuestros profesionales</th>

          {doctores.length === 0 ? (
            <div>No hay doctores disponibles</div>
          ) : (
            <>
              <div className="tabla-flow">
                <div className="cartilla">
                  <div className='columnas' value='columnas'>Nombre</div>
                  <div className='columna-e' value='columnas'>Email</div>
                  <div className='columnas' value='columnas'>Ciudad</div>
                  <div className='columnas' value='columnas'> Teléfono</div>
                  <div className='columnas' value='columnas'>Especialidad</div>
                </div>




                <div className="doctors-list">
                  {sortedDoctors.map((doctor) => (
                    <div key={doctor.id} className="doctor-item" onClick={toggleModalDemo}>
                      <Doctor
                        nombre={doctor.nombre}
                        correo={doctor.correo}
                        direccion={doctor.direccion}
                        telefono={doctor.telefono}
                        especialidad={doctor.especialidad}
                        onClick={() => setSelectedDoctor(doctor)}
                      />

                      <Modal isOpen={modalDemo} toggle={toggleModalDemo}>
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                         <img src={doctor.imagen}/>
                         
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                            onClick={toggleModalDemo}
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </button>
                        </div>
                        <ModalBody>
                        
                        {doctor.nombre}
                          <br></br>
                          E-mail:{doctor.correo}
                          <br></br>
                          Teléfono: {doctor.telefono}
                          <br></br>
                          Dirección: {doctor.direccion}
                          <br></br>
                          Especialidad: {doctor.especialidad}
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={toggleModalDemo}>
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  ))}



                </div>
              </div>
            </>
          )}


          <Paged onClick={handleLoadMore} total={filteredDoctors.length} shown={toShow} />


        </div>
      </div>

      <br></br>

      <Footer className="fixed-bottom" />
    </>
  );
}
