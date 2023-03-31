import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import NavBrain from "../NavBar/NavBrain";
import Footer from "../Footer/Footer";

export default function Home() {
  const handleClick = () => {
    const section = document.getElementById("about");

    section.scrollIntoView({ behavior: "smooth" });
  };

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

  return (
    <>
      <NavBrain />
      <div className="wrapper" id="home">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../../assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("../../assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("../../assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("../../assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../../assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Fácil, Rápido, Preciso <br />
                  <span className="text-white">y Seguro</span>
                </h1>
                <p className="text-white mb-3">
                  Brainly es la solución definitiva para la detección temprana
                  de tumores cerebrales. Ingresa a nuestra aplicación hoy mismo
                  y da el primer paso para proteger tu salud cerebral.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">Leer más</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={handleClick}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.cancer.gov/espanol/noticias/temas-y-relatos-blog/2020/inteligencia-artificial-diagnostico-cirugia-tumores-cerebrales"
                      target="_blank"
                    >
                      <i className="tim-icons icon-world" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="http://ingenieria.uner.edu.ar/boletin/index.php/lo-ultimo-en-cyt/363-imagenes-opticas-e-inteligencia-artificial-para-identificar-tumores-cerebrales"
                      target="_blank"
                    >
                      <i className="tim-icons icon-heart-2" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.cancer.gov/espanol/noticias/temas-y-relatos-blog/2022/inteligencia-artificial-imagenes-cancer"
                      target="_blank"
                    >
                      <i className="tim-icons icon-sound-wave" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("../../assets/img/home-brain.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg" id="about">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("../../assets/img/path4.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-single-02 text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">85-90%</CardTitle>
                                <p />
                                <p className="card-category">
                                  De todos los tumores
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trash-simple text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">251,329</CardTitle>
                                <p />
                                <p className="card-category">
                                  Muertes por Cáncer
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-square-pin text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">308,102</CardTitle>
                                <p />
                                <p className="card-category">
                                  Diagnósticos en 2020
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-atom text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">36%</CardTitle>
                                <p />
                                <p className="card-category">
                                  Supervivencia de 5 años
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <div className="typography-line">
                    <p className="text-muted">
                      Estadísticas adaptadas de la publicación de la American
                      Cancer Society (ACS, Sociedad Americana Contra el Cáncer).
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Acerca de <br />
                      Nosotros
                    </h1>
                    <p>
                      Brainly es una plataforma de diagnóstico asistido por
                      computadora en la que las personas pueden diagnosticar sus
                      enfermedades con un solo clic. Utilizamos técnicas de
                      aprendizaje profundo y aprendizaje automático para
                      detectar el patrón de varias enfermedades con los
                      registros electrónicos de salud del paciente y
                      proporcionar información sobre diversas anomalías.
                    </p>
                    <br />
                    <p>
                      En nuestra plataforma, abordamos el diagnóstico y la
                      detección de tumores cerebrales utilizando U-Net, y lo
                      clasificamos mediante tomografía computarizada. Hemos
                      aplicado diferentes modelos de vanguardia para lograr una
                      buena precisión en nuestros modelos.
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={handleMoreClick}
                    >
                      Leer Más{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg" id="beneficios">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("../../assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("../../assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">
                  ¿Qué beneficios puedes encontrar en Brainly?
                </h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-cloud-download-93" />
                      </div>
                      <h4 className="info-title">Modelos Actualizados</h4>
                      <hr className="line-primary" />
                      <p>
                        Brainly utiliza la última tecnología de inteligencia
                        artificial para detectar tumores cerebrales a través de
                        imágenes de resonancia magnética. Con una precisión del
                        95%, Brainly es capaz de identificar tumores en etapas
                        tempranas.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-lock-circle" />
                      </div>
                      <h4 className="info-title">Mejor Precisión</h4>
                      <hr className="line-warning" />
                      <p>
                        Nuestro algoritmo está diseñado para analizar y detectar
                        incluso las más pequeñas anomalías en las imágenes, lo
                        que significa que podemos detectar tumores que podrían
                        pasar desapercibidos para los radiólogos.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <h4 className="info-title">Fácil Usabilidad</h4>
                      <hr className="line-success" />
                      <p>
                        Además, nuestra aplicación es fácil de usar y accesible
                        para todos, lo que significa que puede ayudar a miles de
                        personas en todo el mundo a obtener un diagnóstico
                        temprano y a tomar medidas preventivas para combatir
                        esta enfermedad.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("../../assets/img/features.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">95%</CardTitle>
                        <p className="card-category text-white">Precisión</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">2870</CardTitle>
                        <p className="card-category text-white">
                          Imágenes Cerebrales
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">30+</CardTitle>
                        <p className="card-category text-white">
                          Usuarios Activos
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Últimas Características</h3>
                  <p>
                    Brainly es una aplicación única que combina tecnología de
                    inteligencia artificial de vanguardia con un enfoque en la
                    detección temprana de tumores cerebrales.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-satisfied" />
                        </div>
                        <div className="ml-3">
                          <h6>Interfaz fácil de usar</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-send" />
                        </div>
                        <div className="ml-3">
                          <h6>Obten informes instantáneos del diagnóstico</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-settings" />
                        </div>
                        <div className="ml-3">
                          <h6>
                            Utilizamos modelos de aprendizaje automático y
                            aprendizaje profundo de bajo peso
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="section section-typo">
          <Container>
            <div className="space-50" />
            <div id="images">
              <h3 className="mb-5">Conoce a Nuestro Equipo</h3>
              <Row>
                <Col sm="3" xs="6">
                  <small className="d-block text-uppercase font-weight-bold mb-4">
                    Image
                  </small>
                  <img
                    alt="..."
                    className="img-fluid rounded shadow"
                    src={require("../../assets/img/ryan.jpg")}
                    style={{ width: "150px" }}
                  />
                </Col>
                <Col sm="3" xs="6">
                  <small className="d-block text-uppercase font-weight-bold mb-4">
                    Circle Image
                  </small>
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow"
                    src={require("../../assets/img/james.jpg")}
                    style={{ width: "150px" }}
                  />
                </Col>
                <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                  <small className="d-block text-uppercase font-weight-bold mb-4">
                    Raised
                  </small>
                  <img
                    alt="..."
                    className="img-fluid rounded shadow-lg"
                    src={require("../../assets/img/lora.jpg")}
                    style={{ width: "150px" }}
                  />
                </Col>
                <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                  <small className="d-block text-uppercase font-weight-bold mb-4">
                    Circle Raised
                  </small>
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow-lg"
                    src={require("../../assets/img/mike.jpg")}
                    style={{ width: "150px" }}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <section className="section section-lg section-coins" id="subscribe">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Escoge tu Plan{" "}
                  <span className="text-info">que mejor se adapte</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../assets/img/semanal.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Plan Semanal</h4>
                        <span>Detalles</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>10ARS/semana</ListGroupItem>
                        <ListGroupItem>50 imágenes</ListGroupItem>
                        <ListGroupItem>Soporte 24/7</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {activeUser ? (
                      <Button className="btn-simple" color="primary">
                        <a
                          mp-mode="dftl"
                          href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808487275dcd01872a5fdebe0160"
                          name="MP-payButton"
                        >
                          Suscribirme Semanal
                        </a>
                      </Button>
                    ) : (
                      <Button className="btn-simple" color="primary">
                        <a href="/login-page">Debes Iniciar Sesión</a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../assets/img/mensual.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Plan Mensual</h4>
                        <span>Detalles</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>250ARS/mes</ListGroupItem>
                        <ListGroupItem>50 imágenes</ListGroupItem>
                        <ListGroupItem>Soporte 24/7</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {activeUser ? (
                      <Button className="btn-simple" color="success">
                        <a
                          mp-mode="dftl"
                          href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848712f89601871662a59e0153"
                          name="MP-payButton"
                        >
                          Suscribirme Mensual
                        </a>
                      </Button>
                    ) : (
                      <Button className="btn-simple" color="primary">
                        <a href="/login-page">Debes Iniciar Sesión</a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../assets/img/anual.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Plan Anual</h4>
                        <span>Detalles</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>500ARS/año</ListGroupItem>
                        <ListGroupItem>50 imágenes</ListGroupItem>
                        <ListGroupItem>Soporte 24/7</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {activeUser ? (
                      <Button className="btn-simple" color="info">
                        <a
                          mp-mode="dftl"
                          href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808487275e6401872880f10c0057"
                          name="MP-payButton"
                        >
                          Suscribirme anual
                        </a>
                      </Button>
                    ) : (
                      <Button className="btn-simple" color="primary">
                        <a href="/login-page">Debes Iniciar Sesión</a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
