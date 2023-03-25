import React from 'react';
import { Link } from "react-router-dom";
import style from './Footer.module.css'



const Footer = () => {
    return (
      <footer className= {style.footer}>
      <div className=  {style.footerContent}>
        ...
      </div>
      <div className= {style.footerLinks}>
        <div className={style.quienesSomos}>
          <Link to="/aboutUs">
            <button className={style.btn}>¿Quiénes somos?</button>
          </Link>
        </div>
      </div>
      <div className={style.footerText}>
        <p>© 2023 Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
export default Footer;
          
 