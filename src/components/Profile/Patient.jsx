import React, { useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";
import PerfectScrollbar from "perfect-scrollbar";
import { createPost } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Estrellas from "../Comments/Estrellas";
import "./estrellas.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Card,
  FormFeedback,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormText,
  Modal,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

import NavBrain from "../NavBar/NavBrain";
import Footer from "../Footer/Footer";

const carouselItems = [
  {
    src: require("../../assets/img/brain-three.jpg"),
    altText: "Slide 1",
    caption: "Selecciona tu Imágen",
  },
  {
    src: require("../../assets/img/brain-two.jpg"),
    altText: "Slide 2",
    caption: "Carga tu Imágen",
  },
  {
    src: require("../../assets/img/brain-one.jpg"),
    altText: "Slide 3",
    caption: "Deja que la IA se encarge del resto",
  },
];

let ps = null;

export default function Patient() {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const activeResult = JSON.parse(localStorage.getItem("activeResult"));
  // const [activeResult] = useState(localStorage.getItem("activeResult"));
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const baseUrl = params.get('preapproval_id')
    if (
      baseUrl
    ) {
      const sendData = async () => {
        try {
          const res = (
            await axios.post("https://brainly-back.onrender.com/pago_exitoso", {
              correo: activeUser.correo,
            })
          ).data;
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };
      sendData()
    }
    else{
      console.log('no esta entrando al if');
    }
  }, [window.location.search]);

  const handleButtonClick = () => {
    // Aquí puedes redirigir a la ruta deseada
    history("/doctor-list");
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
    toast.success("Imagen Cargada!");
  };

  
  React.useEffect(() => {
    if (activeUser.premium === 1) { 
      const buttonDetection = document.querySelector("#detection-btn");
      const buttonForm = document.querySelector("#form-detection");
      buttonDetection.removeAttribute("disabled");
      buttonForm.removeAttribute("disabled")
      
    }
  }, [activeUser]);

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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://brainly-back.onrender.com/detection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("¡Datos enviados!");
        setForm({
          nombre: "",
          usuario: "",
          correo: "",
          imagen: "",
          resultado: "",
        });
        localStorage.setItem("activeResult", JSON.stringify(form));
      })
      .catch((error) => {
        console.error(error);
        toast.error("Hubo un error al enviar los datos");
      });
    setLoading(false);
    setFormModal(false);
  };

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        id: activeUser.id || 1,
      })
    );
    setNewComment({
      usuario_paciente: activeUser.usuario,
      comentario: comment,
      puntuacion: rating,
      id: activeUser.id || 1,
    });

    toast.success("Comentario enviado!");
    setComment("");
    setRating("");
    console.log(activeUser.usuario);
  };

  const [formModal, setFormModal] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener los valores de entrada del usuario
    const usuario = activeUser.usuario; // este valor debe estar disponible en tus props
    const current_password = document.getElementById("current-password").value;
    const new_password = document.getElementById("new-password").value;

    // Enviar una solicitud HTTP POST al servidor Python
    axios
      .post("https://brainly-back.onrender.com/password", {
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
    toast.success("¡Contraseña cambiada con éxito!");
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
  
  



  function getActiveUser() {
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));  // Obtener el objeto activeUser del localstorage y convertirlo a objeto de JavaScript
    const activeUserId = activeUser.id;  // Obtener el valor de la propiedad id del objeto activeUser

    fetch(`https://brainly-back.onrender.com/pacientes/${activeUserId}` )  // Hacer la petición GET al endpoint /api/activeuser en el backend
      .then(response => response.json())  // Convertir la respuesta a un objeto JSON
      .then(activeUser => {
        console.log('ACTIVEUSER:', activeUser);  // Imprimir el activeUser en la consola
        // Hacer lo que necesites con el activeUser actualizado en el frontend
      })
      .catch(error => {
        console.error('Error al obtener el activeUser:', error);  // Manejar errores en la consola
      });
  }
  
  // Definir un temporizador para hacer la petición GET cada cierto tiempo
  setInterval(getActiveUser, 5000);  // Hacer la petición GET cada 5 segundos (5000 milisegundos)



  
  
  
  
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
                          Más
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
                        <ToastContainer />
                      </TabPane>

                      <ToastContainer />

                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary"></thead>
                          <tbody>
                            <tr>
                              <td>Lista de Doctores</td>
                              <td>
                                <Button
                                  color="info"
                                  onClick={handleButtonClick}
                                >
                                  Info
                                </Button>
                              </td>
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

        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Sube tu Imágen</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Después de que la imagen haya sido procesada, recibirás un
                  informe que incluirá información detallada sobre el posible
                  tumor cerebral. Este informe te permitirá tomar medidas
                  tempranas y buscar tratamiento si es necesario. Para
                  asegurarte de que obtienes la mejor experiencia posible con
                  nuestra aplicación, asegúrate de que la imagen que estás
                  subiendo sea clara y nítida, sin obstrucciones o
                  interferencias.
                </p>
                <div className="btn-wrapper pt-3">
                  <form>
                    <label
                      className="btn btn-info"
                      onClick={() =>
                        (window.location.href =
                          "https://detection-brainly.streamlit.app/")
                      }
                      id="detection-btn"
                      disabled
                    >
                      <i className="tim-icons icon-cloud-upload-94" /> Prueba la
                      IA
                    </label>
                    <label
                      color="success"
                      className="btn btn-success"
                      onClick={() => setFormModal(true)}
                      id="form-detection"
                      disabled
                    >
                      Llenar Formulario
                    </label>
                  </form>

                  <div>
                    <ToastContainer />

                    {/* Start Form Modal */}
                    <Modal
                      modalClassName="modal-black"
                      isOpen={formModal}
                      toggle={() => setFormModal(false)}
                    >
                      <div className="modal-header justify-content-center">
                        <button
                          className="close"
                          onClick={() => setFormModal(false)}
                        >
                          <i className="tim-icons icon-simple-remove text-white" />
                        </button>
                        <div className="text-muted text-center ml-auto mr-auto">
                          <h3 className="mb-0">Brainly</h3>
                          <h3 className="mb-0">Resúmen Médico</h3>
                        </div>
                      </div>
                      <div className="modal-body">
                        <div className="btn-wrapper text-center"></div>
                        <div className="text-center text-muted mb-4 mt-3">
                          <small>
                            Llene el formulario solo con la información correcta
                          </small>
                        </div>

                        <FormGroup className="mb-3">
                          <form onSubmit={handleImageSubmit}>
                            <label
                              htmlFor="file-upload"
                              className="btn btn-info"
                            >
                              <i className="tim-icons icon-cloud-upload-94" />{" "}
                              Subir archivo
                            </label>
                            <input
                              id="file-upload"
                              type="file"
                              onChange={handleImagenSeleccionada}
                              style={{ display: "none" }}
                            />
                            <Button
                              type="submit"
                              className="btn-simple"
                              color="primary"
                              style={{ marginLeft: "6.2em" }}
                            >
                              <i className="tim-icons icon-book-bookmark" />{" "}
                              Cargar Imagen
                            </Button>
                            <ToastContainer />
                          </form>
                        </FormGroup>

                        <Form role="form" onSubmit={(e) => handleFormSubmit(e)}>
                          <FormGroup>
                            <InputGroup
                              className={classnames("input-group-alternative", {
                                "input-group-focus": nameFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Nombre y Apellido"
                                type="text"
                                value={form.nombre}
                                onFocus={(e) => setNameFocus(true)}
                                onBlur={(e) => setNameFocus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup
                              className={classnames("input-group-alternative", {
                                "input-group-focus": userFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-single-02" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Usuario"
                                type="text"
                                value={form.usuario}
                                onFocus={(e) => setUserFocus(true)}
                                onBlur={(e) => setUserFocus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup
                              className={classnames("input-group-alternative", {
                                "input-group-focus": emailFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-email-85" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Correo Electrónico"
                                type="text"
                                value={form.correo}
                                onFocus={(e) => setEmailFocus(true)}
                                onBlur={(e) => setEmailFocus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup
                              className={classnames("input-group-alternative", {
                                "input-group-focus": imgFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-camera-18" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Url de la Imagen"
                                type="text"
                                value={form.imagen}
                                onFocus={(e) => setImgFocus(true)}
                                onBlur={(e) => setImgFocus(false)}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup
                              className={classnames("input-group-alternative", {
                                "input-group-focus": resultFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-notes" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Resultado detectado por la IA"
                                type="text"
                                value={form.resultado}
                                onFocus={(e) => setResultFocus(true)}
                                onBlur={(e) => setResultFocus(false)}
                                onChange={(e) => {
                                  setForm({
                                    ...form,
                                    resultado: e.target.value,
                                  });
                                }}
                              />
                            </InputGroup>
                          </FormGroup>
                          <div className="text-center">
                            <Button
                              className="my-4"
                              color="primary"
                              type="submit"
                              disabled={loading}
                            >
                              {loading ? "Enviando..." : "Enviar Datos"}
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </Modal>
                    {/* End Form Modal */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              {console.log(activeUser.resultado)}
              {formSubmitted && (
                <Col md="6">
                  <ToastContainer />
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">
                        Dejanos un Feedback
                      </h1>
                      <h5 className="text-on-back">03</h5>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={handleCommentSubmit}>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Comentanos tu experencia!</label>
                              <Input
                                maxLength="100"
                                invalid={comment.length > 99}
                                placeholder="Escribir comentario"
                                value={comment}
                                onChange={handleCommentChange}
                              />
                              <FormFeedback>
                                Alcanzaste el número maximo de caracteres{" "}
                              </FormFeedback>
                              <label>Dejanos una calificación: </label>
                              <div className="estrellas-row">
                                <Estrellas
                                  rating={rating}
                                  setSavedRating={handleSaveRating}
                                  hoverRating={hoverRating}
                                  setHoverRating={setHoverRating}
                                />
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>

                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="submit"
                          onClick={handleCommentSubmit}
                        >
                          Send text
                        </Button>

                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              )}
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
