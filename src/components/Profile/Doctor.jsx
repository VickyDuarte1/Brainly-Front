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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import NavBrain from "../NavBar/NavBrain";
import Footer from "../Footer/Footer";
import getResults from "../../Redux/actions";

let ps = null;

export default function Doctor() {
  const dispatch = useDispatch();
  const resultados = useSelector((state) => state.resultados);
  console.log("Estos son los resultados", resultados);
  const [modal, setModal] = useState(false);
  const [setSelectedResult] = useState({});
  const [tabs] = React.useState(1);
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
  const toggleModal = (resultado) => {
    setSelectedResult(resultado);
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(getResults());
  }, [dispatch]);

  return (
    <>
      <NavBrain />
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
                <h1 className="profile-title text-left">Resultados</h1>
                <h5 className="text-on-back">Resultados</h5>
                <p className="profile-description">
                  En esta sección puedes consultar los resultados que la IA
                  arroja después de analizar detalladamente las imágenes que son
                  proporcionadas por los ususarios.
                </p>
              </Col>

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
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row>
              {resultados &&
                resultados.map((resultado, index) => (
                  <Col key={index}>
                    <Card style={{ width: "20rem" }}>
                      <CardImg
                        top
                        src={resultado.imagen}
                        alt={resultado.nombre}
                      />
                      <CardBody>
                        <CardTitle>{resultado.nombre}</CardTitle>
                        <CardText>
                          <strong>Usuario: </strong> {resultado.usuario}
                          <br />
                          <strong>Correo: </strong> {resultado.correo}
                          <br />
                          <strong>Resultado: </strong> {resultado.resultado}
                          <br />
                        </CardText>
                        <Button
                          color="primary"
                          onClick={() => toggleModal(resultado)}
                        >
                          Ver
                        </Button>
                        <Modal isOpen={modal} toggle={toggleModal}>
                          <ModalHeader toggle={toggleModal}>
                            <strong>{resultados.nombre}</strong>{" "}
                          </ModalHeader>
                          <ModalBody style={{ paddingLeft: "40px" }}>
                            <strong>Correo:</strong> {resultados.correo}
                            <br />
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="btn btn-primary"
                              onClick={toggleModal}
                            >
                              Cerrar
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
