/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [userFocus, setUserFocus] = React.useState(false);
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [userNameFocus, setUserNameFocus] = React.useState(false);
  const [imageFocus, setImageFocus] = React.useState(false);
  const [ageFocus, setAgeFocus] = React.useState(false);
  const [dateFocus, setDateFocus] = React.useState(false);
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
                      <Form className="form">
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
                              type="select"
                              onFocus={(e) => setUserFocus(true)}
                              onBlur={(e) => setUserFocus(false)}
                            >
                              <option>Tipo de Usuario</option>
                              <option>Paciente</option>
                              <option>Doctor</option>
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
                              placeholder="Nombre y Apellido"
                              type="text"
                              onFocus={(e) => setFullNameFocus(true)}
                              onBlur={(e) => setFullNameFocus(false)}
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
                            placeholder="Correo Electrónico"
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                          />
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
                              placeholder="Usuario"
                              type="text"
                              onFocus={(e) => setUserNameFocus(true)}
                              onBlur={(e) => setUserNameFocus(false)}
                            />
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
                              placeholder="Contraseña"
                              type="password"
                              onFocus={(e) => setPasswordFocus(true)}
                              onBlur={(e) => setPasswordFocus(false)}
                            />
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
                              type="text"
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
                              placeholder="Edad"
                              type="number"
                              onFocus={(e) => setAgeFocus(true)}
                              onBlur={(e) => setAgeFocus(false)}
                            />
                          </InputGroup>
                        </div>
                        <FormGroup check className="text-left">
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
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button className="btn-round" color="primary" size="lg">
                        Get Started
                      </Button>
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
