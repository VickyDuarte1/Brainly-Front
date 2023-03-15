import React from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";


export default function Home() {
    return (
      <div>
        <div>
          <NavBar/>
        </div>

        <h1>BRAINLY</h1>
        <Card
        title="Diagnóstico preciso de tumores"
        text="Sube tus imágenes de tomografías y obtén un diagnóstico preciso de tumores en cuestión de minutos gracias a nuestro algoritmo de inteligencia artificial altamente preciso."
        imageSrc="https://via.placeholder.com/150"
      />
      <Card
        title="Resultados en tiempo real"
        text="Obtén los resultados de diagnóstico de tus pacientes en tiempo real para que puedas tomar decisiones informadas sobre su tratamiento."
        imageSrc="https://via.placeholder.com/150"
      />
      <Card
        title="Seguridad y privacidad de los datos"
        text="Garantizamos la seguridad y privacidad de los datos de tus pacientes mediante el uso de las últimas tecnologías en encriptación y protección de datos."
        imageSrc="https://via.placeholder.com/150"
      />
     </div>
      );
}



