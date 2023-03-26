import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import imagen1 from "../../Assets/imagen1.jpg";
import imagen2 from "../../Assets/imagen2.jpg";
import imagen3 from "../../Assets/imagen3.jpg";
import style from "./Home.module.css";
import Comments from "../Comentarios/Coments";

export default function Home() {
 


    return (
      <div>
        
        <div>
          <NavBar/>
        </div>

        <h1>BRAINLY</h1>
      
        

        <div className={style.carrousele}>

        <Card
        className={style.car1}
        title="Como paciente"
        text="¿Qué puedes hacer?"
        imageSrc= {imagen2}
        fullText="Sube tus imágenes de tomografías y obtén un diagnóstico preciso avalado por un médico gracias a nuestro algoritmo de inteligencia artificial altamente preciso."
      />
      <Card
        className={style.car2}
        title="Como Doctor"
        text="¿Qué puedes hacer ?"
        imageSrc={imagen1}
        
        fullText="Obtén los resultados de diagnóstico de tus pacientes en tiempo real para que puedas tomar decisiones informadas sobre su tratamiento."
      />
      <Card
        className={style.car3}
        title="Seguridad y privacidad de los datos"
        text="¿Cómo lo hacemos?"
        imageSrc={imagen3}
        fullText="Garantizamos la seguridad y privacidad de los datos de tus pacientes mediante la protección de datos"
      />
      </div>

      <Comments/>



      <Footer/>
     

     </div>
      );
}



