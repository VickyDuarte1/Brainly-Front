import React from "react";
import { useNavigate } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";
import { Button } from "reactstrap";

export default function LandingPage() {
  const history = useNavigate();

  const handleButtonClick = () => {
    // Aquí puedes redirigir a la ruta deseada
    history("/home");
  };

  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">¡Bienvenido!</h1>
          <h3 className="d-none d-sm-block" style={{ textTransform: "none" }}>
            "Descubre cómo la IA puede ayudar a salvar vidas detectando tumores
            cerebrales: ¡Conoce Brainly!"
          </h3>
          <Button color="primary" type="button" onClick={handleButtonClick}>
            Ingresar
          </Button>
        </div>
      </Container>
    </div>
  );
}