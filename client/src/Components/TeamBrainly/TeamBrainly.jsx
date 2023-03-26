import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from './Team.module.css';

const TeamBrainly = () => {
    return (
        <div className={styles.fondoAb}>
          <NavBar/>

          <div className={styles.us}>
          <div className={styles.itemsab}>
            <p>Brainly es un proyecto creado por alumnos del bootcamp SoyHenry, en el cual se expone todo lo aprendido durante el mismo.</p>
                  <div className={styles.listaa}>
                    <div>Odette Arriola</div>
                    <div>Victoria Duarte</div>
                    <div>Carolina Ruvira</div>
                    <div>Jorge Torres</div>
                    <div>Agustín Ojeda</div>
                    <div>Alexis Sanz</div>
                  </div>
                  </div>  

<div className={styles.buttonbk}>
        <Link to={`/home`}>
     <button> Volver </button>
      </Link> 
      </div>

      </div>

        </div>
    )
}
export default TeamBrainly;