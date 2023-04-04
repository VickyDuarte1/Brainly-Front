import React, { useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";
import PerfectScrollbar from "perfect-scrollbar";
import { createPost } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Card,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormText,
  NavItem,
  NavLink,
  Nav,
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
} from "reactstrap";

import NavBrain from "../NavBar/NavBrain";
import Footer from "../Footer/Footer";
import getResults from "../../Redux/actions";

let ps = null;

export default function Doctor() {
  const resultados = useSelector((state) => state.resultados);
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const activeResult = JSON.parse(localStorage.getItem("activeResult"));
  const [modal, setModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState({});
  const [url, setUrl] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_srf544n",
        "template_diqnl4q",
        {
          to_email: recipient,
          message: body,
          reply_to: activeUser.correo,
        },
        "63VQQ6yalcuEmr1gC"
      )
      .then(
        (result) => {
          toast.success("¡Correo enviado con éxito!");
        },
        (error) => {
          toast.error(
            "Hubo un error al enviar el correo electrónico. Inténtelo de nuevo más tarde."
          );
          console.error(error);
        }
      );
  };

  const handleImagenSeleccionada = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imagen", imagen);

    const url = "https://brainly-back.onrender.com/upload";
    const respuesta = await axios.post(url, formData);

    setUrl(respuesta.data);
    setForm({ ...form, imagen: respuesta.data });
  };

  useEffect(() => {
    localStorage.getItem("activeResult", JSON.stringify(activeResult));
  }, [activeResult]);

  const [form, setForm] = useState({
    nombre: activeUser.nombre,
    usuario: activeUser.usuario,
    correo: activeUser.correo,
    imagen: "",
    resultado: "",
  });

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [setNewComment] = useState(null);

  const [nameFocus, setNameFocus] = React.useState(false);
  const [userFocus, setUserFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [imgFocus, setImgFocus] = React.useState(false);
  const [resultFocus, setResultFocus] = React.useState(false);
  const [imagen, setImagen] = useState(null);

  const handleSaveRating = (rating) => {
    setRating(rating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
    console.log(rating);
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    dispatch(
      createPost({
        texto: comment,
        puntuacion: rating,
        usuario: activeUser.usuario,
        id: activeUser.id,
      })
    );
    setNewComment({
      usuario_paciente: activeUser.usuario,
      comentario: comment,
      puntuacion: rating,
    });

    setComment("");
    setRating("");
    console.log(activeUser.usuario);
  };

  const [formModal, setFormModal] = React.useState(false);
  //Para el modal
  const toggleModal = (resultado) => {
    setSelectedResult(resultado);
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(getResults());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores de entrada del usuario
    const usuario = activeUser.usuario; // este valor debe estar disponible en tus props
    const current_password = document.getElementById("current-password").value;
    const new_password = document.getElementById("new-password").value;

    // Enviar una solicitud HTTP POST al servidor Python
    axios
      .post("http://localhost:5000/password", {
        usuario: usuario,
        current_password: current_password,
        new_password: new_password,
      })
      .then((response) => {
        // Manejar la respuesta del servidor Python si la solicitud se completa correctamente
        console.log(response);
      })
      .catch((error) => {
        // Manejar cualquier error si la solicitud no se completa correctamente
        console.log(error);
      });
  };

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
                <h1 className="profile-title text-left">
                  Te Damos la Bienvenida!
                </h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Para comenzar a utilizar la aplicación, simplemente ten a la
                  mano la imágen que deseas analizar. Una vez que hayas subido
                  la imágen, la aplicación la procesará utilizando nuestra
                  tecnología de detección de tumores cerebrales.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    id="tooltip639225725"
                    target="_blank"
                  ></Button>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    id="tooltip982846143"
                    target="_blank"
                  ></Button>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    id="tooltip951161185"
                    target="_blank"
                  ></Button>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={activeUser.imagen}
                    />
                    <h3 className="title">Bienvenido/a!</h3>
                    <h4 className="title">{activeUser.nombre}</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Info
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Seguridad
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          MRI
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary"></thead>
                          <tbody>
                            <tr>
                              <td>Usuario</td>
                              <td>{activeUser.usuario}</td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>{activeUser.correo}</td>
                            </tr>
                            <tr>
                              <td>Dirección</td>
                              <td>{activeUser.direccion}</td>
                            </tr>
                            <tr>
                              <td>Teléfono</td>
                              <td>{activeUser.telefono}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Clave actual:</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                id="current-password"
                                placeholder="Contraseña Actual"
                                type="password"
                              />
                              <FormText color="default" tag="span">
                                Ingrese su contraseña actual.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Clave nueva:</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                id="new-password"
                                placeholder="Contraseña Nueva"
                                type="password"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          id="change-password-btn"
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Imágen</th>
                              <th className="header">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Imagen</td>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
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
                    arroja después de analizar detalladamente las imágenes que
                    son proporcionadas por los ususarios.
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
                          <Modal
                            modalClassName="modal-black"
                            isOpen={modal}
                            toggle={toggleModal}
                          >
                            <div className="modal-body">
                              <div className="btn-wrapper text-center"></div>
                              <div className="text-center text-muted mb-4 mt-3">
                                <small>
                                  Llene el formulario solo con la información
                                  correcta
                                </small>
                              </div>

                              <Form
                                role="form"
                                onSubmit={(e) => handleEmailSubmit(e)}
                              >
                                <FormGroup>
                                  <InputGroup
                                    className={classnames(
                                      "input-group-alternative",
                                      {
                                        "input-group-focus": emailFocus,
                                      }
                                    )}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-email-85" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Correo Electrónico"
                                      type="text"
                                      value={recipient}
                                      onFocus={(e) => setEmailFocus(true)}
                                      onBlur={(e) => setEmailFocus(false)}
                                      onChange={handleRecipientChange}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames(
                                      "input-group-alternative",
                                      {
                                        "input-group-focus": resultFocus,
                                      }
                                    )}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-notes" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Mensaje a Enviar"
                                      type="text"
                                      value={body}
                                      onFocus={(e) => setResultFocus(true)}
                                      onBlur={(e) => setResultFocus(false)}
                                      onChange={handleBodyChange}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                  <Button
                                    className="my-4"
                                    color="primary"
                                    type="submit"
                                  >
                                    Enviar Mensaje
                                  </Button>
                                  <ToastContainer />
                                </div>
                              </Form>
                            </div>
                          </Modal>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
