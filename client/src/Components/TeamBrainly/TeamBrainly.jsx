import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const TeamBrainly = () => {
    return (
        <div>
          <NavBar/>
            <p>Brainly es un proyecto creado por alumnos del bootcamp SoyHenry, en el cual se expone todo lo aprendido durante el mismo.</p>
                  <ul>
                    <li>Odette Arriola</li>
                    <li>Victoria Duarte</li>
                    <li>Carolina Ruvira</li>
                    <li>Jorge Torres</li>
                    <li>Agustín Ojeda</li>
                    <li>Alexis Sanz</li>
                  </ul>
                  
        <Link to={`/home`}>
     <button> Volver </button>
      </Link> 

        </div>
    )
}
export default TeamBrainly;