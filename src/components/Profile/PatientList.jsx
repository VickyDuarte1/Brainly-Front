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
import { getUsers } from "../../Redux/actions";
import Paged from "../Paged";

let ps = null;

export default function PatientList() {
  const dispatch = useDispatch();
  const pacientes = useSelector((state) => state.pacientes);
  console.log("Estos son los resultados", pacientes);
  const [modal, setModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});
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
  const toggleModal = (paciente) => {
    setSelectedPatient(paciente);
    setModal(!modal);
  };

  //Variables para filtros y ordenamientos
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //Variables para paginado
  const [toShow, setToShow] = useState(6);

  const handleLoadMore = () => {
    setToShow(toShow + 6);
  };

  const handleClearFilters = () => {
    document.getElementById("campo_de_entrada").value = "";
    setSelectedOption("");
    setSearchTerm("");
    setSelectedAge("");
    setSelectedGender("");
    console.log("searchterm:" + searchTerm);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //Filtros y ordenamientos
  const filteredUsers = pacientes
    .filter((paciente) => {
      const fullName = paciente.nombre.toLowerCase();
      const term = searchTerm.toLowerCase();
      return (
        fullName.startsWith(term) ||
        fullName.endsWith(term) ||
        fullName.includes(` ${term}`)
      );
    })
    .filter((paciente) => {
      if (!selectedAge) {
        return true; // no se ha seleccionado un rango de edad, mostrar todos los usuarios
      } else if (selectedAge === "0-25") {
        return paciente.edad < 25;
      } else if (selectedAge === "25-50") {
        return paciente.edad >= 25 && paciente.edad <= 50;
      } else if (selectedAge === "50+") {
        return paciente.edad > 50;
      } else {
        return 0;
      }
    })
    .filter((paciente) => {
      if (!selectedGender) {
        return true;
      } else if (selectedGender === "femenino") {
        return paciente.genero === "femenino";
      } else if (selectedGender === "masculino") {
        return paciente.genero === "masculino";
      } else {
        return 0;
      }
    });

  const sortedUsers =
    filteredUsers.length > 0
      ? filteredUsers.slice(0, toShow).sort((a, b) => {
          if (selectedOption === "asc") {
            return a.nombre.localeCompare(b.nombre);
          } else if (selectedOption === "desc") {
            return b.nombre.localeCompare(a.nombre);
          } else {
            return 0;
          }
        })
      : filteredUsers;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <NavBrain />
      <Row>
        <Col className="ml-auto mr-auto" lg="4" md="6">
          <Card className="card-coin card-plain">
            <CardHeader></CardHeader>
            <CardBody>
              <TabContent
                className="tab-subcategories"
                activeTab={"tab" + tabs}
              >
                <TabPane tabId="tab1">
                  <Table className="tablesorter" responsive></Table>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
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
                <h1 className="profile-title text-left">Pacientes</h1>
                <h5 className="text-on-back">Pacientes</h5>
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <FormGroup>
                  <Label>Ordenar alfabéticamente:</Label>
                  <Input
                    id="campo_de_entrada"
                    type="select"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value=""> </option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label>Filtrar por edad:</Label>
                  <Input
                    id="campo_de_entrada"
                    type="select"
                    value={selectedAge}
                    onChange={(event) => setSelectedAge(event.target.value)}
                  >
                    <option value=""> </option>
                    <option value="0-25">Menores de 25</option>
                    <option value="25-50">Entre 25 y 50</option>
                    <option value="50+">Mayores de 50</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Label>Filtrar por género:</Label>
                  <Input
                    id="campo_de_entrada"
                    type="select"
                    value={selectedGender}
                    onChange={(event) => setSelectedGender(event.target.value)}
                  >
                    <option value=""> </option>
                    <option value="femenino">Mujer</option>
                    <option value="masculino">Hombre</option>
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
              {sortedUsers.map((paciente, index) => (
                <Col key={index}>
                  <Card style={{ width: "20rem" }}>
                    <CardImg
                      top
                      src={paciente.imagen || "https://via.placeholder.com/300"}
                      alt={paciente.nombre}
                    />
                    <CardBody>
                      <CardTitle>{paciente.nombre}</CardTitle>
                      <CardText>
                        <strong>Edad:</strong> {paciente.edad}
                        <br />
                        <strong>Usuario:</strong> {paciente.usuario}
                        <br />
                        <strong>Resultado:</strong> {paciente.resultado}
                        <br />
                      </CardText>
                      <Button
                        color="primary"
                        onClick={() => toggleModal(paciente)}
                      >
                        Ver
                      </Button>
                      <Modal isOpen={modal} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>
                          <strong>{selectedPatient.nombre}</strong>
                        </ModalHeader>
                        <ModalBody style={{ paddingLeft: "40px" }}>
                          <img
                            src={
                              selectedPatient.imagen ||
                              "srcassetsimgdefaultProfile.jpg"
                            }
                            alt={selectedPatient.nombre}
                            style={{ maxWidth: "100%" }}
                          />
                          <br />
                          <strong>Edad:</strong> {selectedPatient.edad}
                          <br />
                          <strong>Género:</strong> {selectedPatient.genero}
                          <br />
                          <strong>Fecha de nacimiento:</strong>{" "}
                          {selectedPatient.fecha_nacimiento}
                          <br />
                          <strong>Dirección:</strong>{" "}
                          {selectedPatient.direccion}
                          <br />
                          <strong>Teléfono:</strong> {selectedPatient.telefono}
                          <br />
                          <strong>Correo:</strong> {selectedPatient.correo}
                          <br />
                          <strong>Resultado:</strong>{" "}
                          {selectedPatient.resultado}
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
                total={filteredUsers.length}
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
