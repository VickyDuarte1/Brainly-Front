import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors, getUsers } from "../../Redux/actions";
import { GoogleLogin } from "@react-oauth/google";
import * as jose from "jose";
import classnames from "classnames";
import { Navigate } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import NavBrain from "../NavBar/NavBrain";
import Footer from "../Footer/Footer";

export default function Login() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [modal, setModal] = useState(false);
  const pacientes = useSelector((state) => state.pacientes);
  const doctores = useSelector((state) => state.doctores);
  const [miniModal, setMiniModal] = React.useState(true);

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    usuario: "",
    contraseña: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setMiniModal(!miniModal);
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getDoctors());
  }, [dispatch]);

  function findUser(username, password) {
    const user = pacientes.find(
      (user) => user.usuario === username && user.contraseña === password
    );
    if (user && user.activo) {
      setActiveUser({
        ...user,
        activeUser: true,
        tipo_user: "paciente",
        activo: user.activo,
      });
      localStorage.setItem(
        "activeUser",
        JSON.stringify({
          ...user,
          activeUser: true,
          tipo_user: "paciente",
          contraseña: "*****",
          activo: user.activo,
        })
      );
      return user;
    } else {
      const doctor = doctores.find(
        (doctor) =>
          doctor.usuario === username && doctor.contraseña === password
      );
      if (doctor && doctor.activo) {
        setActiveUser({ ...doctor, activeUser: true, tipo_user: "doctor" });
        localStorage.setItem(
          "activeUser",
          JSON.stringify({
            ...doctor,
            activeUser: true,
            tipo_user: "doctor",
            contraseña: "*****",
            activo: doctor.activo,
          })
        );
        return doctor;
      }
    }
    return null;
  }
  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const usuarioact = findUser(user.usuario, user.contraseña);
    //EN USUARIOACT ESTA LA INFO DEL USUARIO COMPLETA DEL USUARIO
    setIsLoggedIn(true);

    if (!usuarioact) {
      // Muestra mensaje de error si el usuario no existe
      toggleModal();

      return;
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);
  };

  function findUserGoogle(correo) {
    const paciente = pacientes.find((user) => user.correo === correo);
    if (paciente) {
      if (paciente.activo) {
        setActiveUser({
          ...paciente,
          activeUser: true,
          tipo_user: "paciente",
          activo: paciente.activo,
        });

        localStorage.setItem(
          "activeUser",
          JSON.stringify({
            ...paciente,
            activeUser: true,
            tipo_user: "paciente",
            contraseña: "*****",
            activo: paciente.activo,
          })
        );
      } else {
        // el usuario no está activo, no se establece como usuario activo ni se guarda en el almacenamiento local
        console.log("El usuario no está activo");
      }
    } else {
      const doctor = doctores.find((doctor) => doctor.correo === correo);
      if (doctor) {
        if (doctor.activo) {
          setActiveUser({ ...doctor, activeUser: true, tipo_user: "doctor" });
          localStorage.setItem(
            "activeUser",
            JSON.stringify({
              ...doctor,
              activeUser: true,
              tipo_user: "doctor",
              contraseña: "*****",
            })
          );
        } else {
          // el usuario no está activo, no se establece como usuario activo ni se guarda en el almacenamiento local
          console.log("El usuario no está activo");
        }
      } else {
        toggleModal();
      }
    }
  }

  function handleUser(user) {
    if (user) {
      setActiveUser(user);
      toggleModal2();
    }
  }

  pacientes.forEach(function (paciente) {
    console.log(
      "El paciente " + paciente.nombre + " está activo: " + paciente.activo
    );
  });

  console.log("ACTIVEUSERS:" + JSON.stringify(activeUser));
  console.log("PACIENTESARRAY" + pacientes.activo);
  console.log("USERS:" + JSON.stringify(user));

  return (
    <>
      <NavBrain />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />

                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("../../assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4">Ingresa</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" onSubmit={(e) => handleSignIn(e)}>
                        Ingresa con tu usuario y contraseña:
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus,
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
                            //aca iria el handllesubmit?
                            name="usuario"
                            value={user.usuario}
                            onChange={(e) => onChange(e)}
                            id="usuario"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Contraseña"
                            name="contraseña"
                            id="contraseña"
                            value={user.contraseña}
                            onChange={(e) => onChange(e)}
                            type="password"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                          />
                        </InputGroup>
                        <div>
                          <Modal isOpen={modal} toggle={toggleModal}>
                            <ModalHeader toggle={toggleModal}>
                              Error{" "}
                            </ModalHeader>
                            <ModalBody>
                              Usuario o contraseña no encontrados.
                            </ModalBody>
                          </Modal>

                          {activeUser && isLoggedIn && (
                            <div>
                              <Modal
                                modalClassName="modal-mini modal-primary modal-mini"
                                isOpen={miniModal}
                                toggle={toggleModal}
                              >
                                <div className="modal-header justify-content-center">
                                  <button
                                    className="close"
                                    onClick={() => setMiniModal(false)}
                                  >
                                    <i className="tim-icons icon-simple-remove text-white" />
                                  </button>

                                  <div className="modal-profile">
                                    <img
                                      src={activeUser.imagen}
                                      style={{ borderRadius: "80%" }}
                                      alt="profile"
                                    />
                                  </div>
                                </div>
                                <div className="modal-body">
                                  <p>
                                    Bienvenido a Brainly {activeUser.nombre}{" "}
                                    {activeUser.tipo_user}
                                  </p>
                                </div>
                                <div className="modal-footer">
                                  <Button
                                    className="btn-neutral"
                                    color="link"
                                    type="button"
                                  >
                                    Back
                                  </Button>
                                  <Button
                                    className="btn-neutral"
                                    color="link"
                                    onClick={() => {
                                      setMiniModal(false);
                                    }}
                                    type="button"
                                  >
                                    Close
                                  </Button>
                                </div>
                              </Modal>

                              {
                                //ACA ES LA PARTE DONDE PONDRIAS EL MAIL DEL ADMIN
                              }

                              {miniModal ? null : activeUser &&
                                activeUser.correo ===
                                  "victoria.durte@gmail.com" ? (
                                (window.location.href =
                                  "https://dashboard-brainly.vercel.app")
                              ) : activeUser.tipo_user === "doctor" ? (
                                <Navigate to="/profile-doctor" />
                              ) : (
                                <Navigate to="/profile-patient" />
                              )}
                            </div>
                          )}

                          {!activeUser && (
                            <div>
                              <Button
                                className="btn-round"
                                color="primary"
                                size="lg"
                                onClick={handleSignIn}
                                type="submit"
                              >
                                Get Started
                              </Button>
                              <br></br>
                              <br></br>O tambien:
                              <br></br>
                              <br></br>
                              <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                  const credential = credentialResponse;
                                  const token = credential.credential;
                                  const secretKey = credential.secretKey;
                                  const decodedToken = jose.decodeJwt(
                                    token,
                                    secretKey
                                  );
                                  const correo = decodedToken.email;

                                  findUserGoogle(correo);
                                  handleUser(findUserGoogle(correo));
                                  setIsLoggedIn(true);
                                }}
                                onError={() => {}}
                              />
                            </div>
                          )}

                          {activeUser && (
                            <Button onClick={handleLogOut}>
                              Cerrar sesión
                            </Button>
                          )}
                        </div>
                        <br></br>
                        <FormGroup className="text-left">
                          <Label>
                            <br></br>
                            <br></br>
                            <span className="form-check-sign" />
                            Primera vez como usuario{" "}
                            <a href="/register">Registrate</a>
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
