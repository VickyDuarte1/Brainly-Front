import { Link } from "react-router-dom";
import style from './Footer.module.css'

const Footer = () => {
    return (
     
     <div className={style.quienessomos}>Es fácil de usar
     
              <footer>
                    <Link to = "/aboutUs">¿Quiénes somos?</Link>
                  
              
              </footer>
              </div>
    );
}

export default Footer;

        
          
 