import style from './About.module.css'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const About = () => {
    return (
     
        <div className={style.aboutUs}>
           <NavBar/>
       
       
        <h2 className={style.title}>¿Qué es BRAINLY?</h2>
        <p className={style.text}>BRAINLY es una plataforma de diagnóstico asistido por computadora en la que las personas pueden diagnosticar sus enfermedades con un solo click.</p>
        <p className={style.text}>Utilizamos técnicas de aprendizaje profundo y aprendizaje automático para detectar el patrón de varias enfermedades con los registros electrónicos de salud del paciente y proporcionar información sobre diversas anomalías.</p>
        <p className={style.text}>En nuestra plataforma, abordamos el diagnóstico y la detección de tumores cerebrales utilizando U-Net, y lo clasificamos según su tipo como, glioma, meningioma o pituitario mediante tomografía computarizada.</p>
        <p className={style.text}>Algunas de las características únicas de nuestro proyecto son:</p>
        <ul className={style.ul}>
          <li className={style.li}>Es fácil de usar</li>
          <li className={style.li}>Podemos obtener informes instantáneos del diagnóstico</li>
          <li className={style.li}>Se utilizan modelos de aprendizaje automático y aprendizaje profundo de bajo peso.</li>
          <li className={style.li}>Proporciona soporte multiplataforma.</li>
        </ul>

        <Link to={`/home`}>
     <button> Volver </button>
      </Link> 

      </div>
    );
}

export default About;