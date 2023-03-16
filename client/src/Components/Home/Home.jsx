import React from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import imagen1 from '../../Assets/imagen1.jpg';
import imagen2 from '../../Assets/imagen2.jpg';
import imagen3 from '../../Assets/imagen3.jpg';


export default function Home() {
    return (
      <div>
        <div>
          <NavBar/>
        </div>

        <h1>BRAINLY</h1>
        <Card
        title="Como paciente..."
        text="Sube tus imágenes de tomografías y obtén un diagnóstico preciso avalado por un médico gracias a nuestro algoritmo de inteligencia artificial altamente preciso."
        imageSrc= {imagen2}
      />
      <Card
        title="Como Doctor..."
        text="Obtén los resultados de diagnóstico de tus pacientes en tiempo real para que puedas tomar decisiones informadas sobre su tratamiento."
        imageSrc={imagen1}
      />
      <Card
        title="Seguridad y privacidad de los datos"
        text="Garantizamos la seguridad y privacidad de los datos de tus pacientes mediante la protección de datos."
        imageSrc={imagen3}
      />
     </div>
      );
}



