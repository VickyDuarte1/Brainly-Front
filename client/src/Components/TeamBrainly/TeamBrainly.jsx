import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import TeamMemberCard from "./TeamMemberCard";
import Jorge from '../../Assets/Jorge.jpg'
import Odette from '../../Assets/Odette.jpg'
import Vicky from '../../Assets/Vicky.jpeg'
import Caro from '../../Assets/Caro.jpeg'
import AgusOvalle from '../../Assets/AgusOvalle.jpeg'



const TeamBrainly = () => {
    return (
        <div>
          <NavBar/>
          <hr/>
          <hr/>
            <h1>Brainly es un proyecto creado por alumnos del bootcamp SoyHenry, en el cual se expone todo lo aprendido durante el mismo.</h1>
                  <div>
                    <TeamMemberCard
                    name='Odette Arriola'
                    imageSrc= {Odette}
                    />
                    <TeamMemberCard
                    name= "Jorge Torres"
                    imageSrc= {Jorge}
                    />
                    <TeamMemberCard
                    name= "Victoria Duarte"
                    imageSrc= {Vicky}
                    />
                    <TeamMemberCard
                    name= "Agustín Ojeda"
                    imageSrc= {Vicky}
                    />
                    <TeamMemberCard
                    name= "Carolina Ruvira"
                    imageSrc= {Caro}
                    />
                    <TeamMemberCard
                    name= "Alexis Sanz"
                    imageSrc= {Caro}
                    />
                    <TeamMemberCard
                    name= "Agustín Ovalle"
                    imageSrc= {AgusOvalle}
                    />
                  </div>
                  
        <Link to={`/home`}>
     <button> Volver </button>
      </Link> 

        </div>
    )
}
export default TeamBrainly;