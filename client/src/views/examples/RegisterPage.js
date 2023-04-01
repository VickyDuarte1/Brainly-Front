import classnames from "classnames";
// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/actions";

//VALIDACIONES :)

const validate = (form) => {
  let errors = {};

  if (!form.nombre) {
    errors.nombre = "Por favor ingresa un nombre";
  } else if (!form.usuario) {
    errors.usuario = "Por favor genere un nombre de usuario";
  } else if (!form.correo) {
    errors.correo = "Por favor ingresa un email";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.correo)
  ) {
    errors.correo = "Ingresa un email válido";
  } else if (!form.contraseña) {
    errors.contraseña = "Por favor ingresa una contraseña";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
      form.contraseña
    )
  ) {
    errors.contraseña =
      "La contraseña debe de tener mínimo 8 caracteres, al menos un número, una letra minúscula, una letra mayúscula y un carácter especial.";
  }

  return errors;
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [userFocus, setUserFocus] = React.useState(false);
  const [specialityFocus, setSpecialityFocus] = React.useState(false);
  const [credentialsFocus, setCredentialsFocus] = React.useState(false);
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [userNameFocus, setUserNameFocus] = React.useState(false);
  const [imageFocus, setImageFocus] = React.useState(false);
  const [ageFocus, setAgeFocus] = React.useState(false);
  const [dateFocus, setDateFocus] = React.useState(false);
  const [genderFocus, setGenderFocus] = React.useState(false);
  const [adressFocus, setAdressFocus] = React.useState(false);
  const [phoneFocus, setPhoneFocus] = React.useState(false);
  const [resultFocus, setResultFocus] = React.useState(false);
  const [activeUser, setActiveUser] = useState(
    localStorage.getItem("activeUser")
  );
  const [errors, setErrors] = React.useState({});
  // const navigate= useNavigate();

  const [form, setForm] = useState({
    tipo_usuario: "",
    especialidad: "",
    credenciales: "",
    nombre: "",
    usuario: "",
    correo: "",
    contraseña: "",
    imagen: "",
    edad: "",
    fecha_nacimiento: "",
    genero: "",
    direccion: "",
    telefono: "",
    resultado: "",
  });

  const style = {
    display: "none",
  };

  const styleErrors = {
    color: "red",
  };

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
    console.log(errors);
    console.log(form);
  };

  useEffect(() => {
    localStorage.getItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);

  function handleDoctor(e) {
    const optionSelected = e.target.value;
    if (optionSelected === "doctor") {
      document.getElementById("medicalInputs").style.display = "flex";
    } else {
      document.getElementById("medicalInputs").style.display = "none";
    }
    if (optionSelected === "paciente") {
      document.getElementById("results").style.display = "none";
    }
    setForm({
      ...form,
      tipo_usuario: optionSelected,
    });
  }

  const followCursor = (e) => {
    let posX = e.clientX - window.innerWidth / 2;
    let posY = e.clientY - window.innerWidth / 6;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(createUser(form));
    alert("¡Tu usuario ha sido creado!");
    setForm({
      tipo_usuario: "",
      especialidad: "",
      credenciales: "",
      nombre: "",
      usuario: "",
      correo: "",
      contraseña: "",
      imagen: "",
      edad: "",
      fecha_nacimiento: "",
      genero: "",
      direccion: "",
      telefono: "",
      resultado: "",
    });
    localStorage.setItem("activeUser", JSON.stringify(form));
    // navigate('/home');
  };
  return (
    <>
      <ExamplesNavbar />
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
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-row">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": userFocus,
                              "col-md-6": true, // Agrega aquí la clase adicional
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-alert-circle-exc" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Tipo de Usuario"
                              value="tipo_usuario"
                              name="tipo_usuario"
                              type="select"
                              onChange={(e) => handleDoctor(e)}
                              onFocus={(e) => setUserFocus(true)}
                              onBlur={(e) => setUserFocus(false)}
                              id="optionSelected"
                            >
                              <option>Tipo de usuario</option>
                              <option value="paciente">Paciente</option>
                              <option value="doctor">Doctor</option>
                            </Input>
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": fullNameFocus,
                              "col-md-6": true, // Agrega aquí la clase adicional
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>

                            <Input
                              name="nombre"
                              value={form.nombre}
                              placeholder="Nombre y Apellido"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setFullNameFocus(true)}
                              onBlur={(e) => setFullNameFocus(false)}
                            />
                          </InputGroup>
                          <div style={styleErrors}>{errors.nombre}</div>
                        </div>

                        <div
                          className="form-row"
                          id="medicalInputs"
                          style={style}
                        >
                          <InputGroup
                            className={classnames({
                              "input-group-focus": specialityFocus,
                              "col-md-6": true, // Agrega aquí la clase adicional
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-book-bookmark" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="especialidad"
                              value={form.especialidad}
                              placeholder="Especialidad"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setSpecialityFocus(true)}
                              onBlur={(e) => setSpecialityFocus(false)}
                            />
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": credentialsFocus,
                              "col-md-6": true, // Agrega aquí la clase adicional
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-badge" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="credenciales"
                              value={form.credenciales}
                              placeholder="Credenciales"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setCredentialsFocus(true)}
                              onBlur={(e) => setCredentialsFocus(false)}
                            />
                          </InputGroup>
                        </div>

                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>

                          <Input
                            value={form.correo}
                            name="correo"
                            onChange={(e) => handleChange(e)}
                            placeholder="Correo Electrónico"
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            id="correo"
                          />
                          <div style={styleErrors}>{errors.correo}</div>
                        </InputGroup>

                        <div className="form-row">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": userNameFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-zoom-split" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="usuario"
                              value={form.usuario}
                              onChange={(e) => handleChange(e)}
                              placeholder="Usuario"
                              type="text"
                              onFocus={(e) => setUserNameFocus(true)}
                              onBlur={(e) => setUserNameFocus(false)}
                            />
                            <div style={styleErrors}>{errors.usuario}</div>
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": passwordFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="contraseña"
                              value={form.contraseña}
                              placeholder="Contraseña"
                              type="password"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setPasswordFocus(true)}
                              onBlur={(e) => setPasswordFocus(false)}
                            />
                            <div style={styleErrors}>{errors.contraseña}</div>
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": imageFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-image-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="URL Imágen de Perfil"
                              type="url"
                              name="imagen"
                              value={form.imagen}
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setImageFocus(true)}
                              onBlur={(e) => setImageFocus(false)}
                            />
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": ageFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-atom" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="edad"
                              value={form.edad}
                              min="1"
                              max="100"
                              step="1"
                              placeholder="Edad"
                              type="number"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setAgeFocus(true)}
                              onBlur={(e) => setAgeFocus(false)}
                            />
                          </InputGroup>
                        </div>
                        <div className="form-row">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": genderFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-shape-star" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              value={form.genero}
                              name="genero"
                              placeholder="Género"
                              type="select"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setGenderFocus(true)}
                              onBlur={(e) => setGenderFocus(false)}
                            >
                              <option>Género</option>
                              <option value="femenino">Femenino</option>
                              <option value="masculino">Masculino</option>
                            </Input>
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": dateFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-calendar-60" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="fecha_nacimiento"
                              value={form.fecha_nacimiento}
                              placeholder="Fecha de Nacimiento"
                              type="date"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setDateFocus(true)}
                              onBlur={(e) => setDateFocus(false)}
                            />
                          </InputGroup>
                        </div>

                        <div className="form-row">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": adressFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-square-pin" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="direccion"
                              value={form.direccion}
                              placeholder="Dirección"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setAdressFocus(true)}
                              onBlur={(e) => setAdressFocus(false)}
                            />
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": phoneFocus,
                              "col-md-6": true,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-mobile" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="telefono"
                              value={form.telefono}
                              placeholder="Teléfono"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setPhoneFocus(true)}
                              onBlur={(e) => setPhoneFocus(false)}
                            />
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": resultFocus,
                              "col-md-6": true,
                            })}
                            id="results"
                            style={style}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-atom" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="resultado"
                              value={form.resultado}
                              placeholder="Resultado"
                              type="text"
                              onChange={(e) => handleChange(e)}
                              onFocus={(e) => setResultFocus(true)}
                              onBlur={(e) => setResultFocus(false)}
                            />
                          </InputGroup>
                        </div>
                        {/* <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup> */}
                        <Button
                          type="submit"
                          className="btn-round"
                          color="primary"
                          size="lg"
                          disabled={Object.keys(errors).length > 0}
                        >
                          Crear Usuario
                        </Button>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      {" "}
                      <Alert color="danger">{errors.nombre}</Alert>
                    </CardFooter>
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