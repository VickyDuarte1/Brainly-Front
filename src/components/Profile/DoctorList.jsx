import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PerfectScrollbar from "perfect-scrollbar";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";

import NavBrain from "../NavBar/NavBrain";
import Footer from "../Footer/Footer";
import { getDoctors } from "../../Redux/actions";
import Paged from "../Paged";
import CitySearch from "../CitySearch/CitySearch";

let ps = null;

export default function DoctorList() {
  const dispatch = useDispatch();
  const doctores = useSelector((state) => state.doctores);
  console.log("Estos son los resultados", doctores);
  const [modal, setModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  //Para el modal
  const toggleModal = (doctor) => {
    setSelectedDoctor(doctor);
    setModal(!modal);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchName, setSearchName] = useState("");

  //Variables para paginado
  const [toShow, setToShow] = useState(6);

  const handleLoadMore = () => {
    setToShow(toShow + 6);
  };

  const handleClearFilters = () => {
    document.getElementById("campo_de_entrada").value = "";
    setSelectedOption("");
    setSearchTerm("");
    setSelectedSpeciality("");
    setSearchCity("");
    console.log("searchCity:" + searchCity);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCity = (city) => {
    setSearchCity(city);
  };

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
  };

  //Filtros y ordenamientos
  const filteredDoctors = doctores.filter(
    (doctor) =>
      doctor.nombre
        .split(" ")
        .some((namePart) =>
          namePart.toLowerCase().startsWith(searchName.toLowerCase())
        ) &&
      (selectedSpeciality === "" ||
        doctor.especialidad === selectedSpeciality) &&
      (searchCity === "" ||
        (doctor.direccion &&
          doctor.direccion.toLowerCase().startsWith(searchCity.toLowerCase())))
  );

  const sortedDoctors =
    filteredDoctors.length > 0
      ? filteredDoctors.slice(0, toShow).sort((a, b) => {
          if (selectedOption === "asc") {
            return a.nombre.localeCompare(b.nombre);
          } else if (selectedOption === "desc") {
            return b.nombre.localeCompare(a.nombre);
          } else {
            return 0;
          }
        })
      : filteredDoctors;

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <>
      <NavBrain />
      <Col className="ml-auto mr-auto" lg="4" md="6">
        <Card className="card-coin card-plain">
          <CardHeader></CardHeader>
          <CardBody>
            <TabContent className="tab-subcategories" activeTab={"tab" + tabs}>
              <TabPane tabId="tab1">
                <Table className="tablesorter" responsive></Table>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("../../assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Doctores</h1>
                <h5 className="text-on-back">Doctores</h5>
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <FormGroup>
                  <CitySearch onSearch={handleCity} />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label>Buscar por nombre:</Label>
                  <Input
                    type="text"
                    value={searchName}
                    onChange={handleNameChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label>Ordenar alfabeticamente:</Label>
                  <Input
                    id="campo_de_entrada"
                    type="select"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="" style={{backgroundColor: '#2b3553'}}> </option>
                    <option value="asc" style={{backgroundColor: '#2b3553'}}>A-Z</option>
                    <option value="desc" style={{backgroundColor: '#2b3553'}}>Z-A</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Label>Filtrar por especialidad:</Label>
                  <Input
                    id="campo_de_entrada"
                    type="select"
                    value={selectedSpeciality}
                    onChange={handleSpecialityChange}
                  >
                    <option value="" style={{backgroundColor: '#2b3553'}}> </option>
                    <option value="Cirujano" style={{backgroundColor: '#2b3553'}}>Cirujano</option>
                    <option value="Neurólogo" style={{backgroundColor: '#2b3553'}}>Neurólogo</option>
                    <option value="neurocirujano" style={{backgroundColor: '#2b3553'}}>Neurocirujano</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="d-flex justify-content-center">
          <Button color="btn btn-primary" onClick={handleClearFilters}>
            Limpiar filtros
          </Button>
        </div>

        <div className="section">
          <Container>
            <Row>
              {sortedDoctors.map((doctor, index) => (
                <Col key={index}>
                  <Card style={{ width: "20rem" }}>
                    <CardImg
                      top
                      src={doctor.imagen || "https://via.placeholder.com/300"}
                      alt={doctor.nombre}
                    />
                    <CardBody>
                      <CardTitle>{doctor.nombre}</CardTitle>
                      <CardText>
                        <strong>Especialidad: </strong> {doctor.especialidad}
                        <br />
                        <strong>Credenciales: </strong> {doctor.credenciales}
                        <br />
                      </CardText>
                      <Button
                        color="primary"
                        onClick={() => toggleModal(doctor)}
                      >
                        Ver
                      </Button>
                      <Modal isOpen={modal} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>
                          <strong>{selectedDoctor.nombre}</strong>
                        </ModalHeader>
                        <ModalBody style={{ paddingLeft: "40px" }}>
                          <img
                            src={
                              selectedDoctor.imagen ||
                              "srcassetsimgdefaultProfile.jpg"
                            }
                            alt={selectedDoctor.nombre}
                            style={{ maxWidth: "100%" }}
                          />
                          <br />
                          <strong>Especialidad: </strong> {doctor.especialidad}
                          <br />
                          <strong>Credenciales: </strong> {doctor.credenciales}
                          <br />
                          <strong>Edad:</strong> {selectedDoctor.edad}
                          <br />
                          <strong>Género:</strong> {selectedDoctor.genero}
                          <br />
                          <strong>Fecha de nacimiento:</strong>{" "}
                          {selectedDoctor.fecha_nacimiento}
                          <br />
                          <strong>Dirección:</strong> {selectedDoctor.direccion}
                          <br />
                          <strong>Teléfono:</strong> {selectedDoctor.telefono}
                          <br />
                          <strong>Correo:</strong> {selectedDoctor.correo}
                          <br />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="btn btn-primary" onClick={toggleModal}>
                            Cerrar
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <div>
              <Paged
                onClick={handleLoadMore}
                total={filteredDoctors.length}
                shown={toShow}
              />
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
