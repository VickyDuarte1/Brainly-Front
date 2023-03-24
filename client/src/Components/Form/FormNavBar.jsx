import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from "../NavBar/NavBar.module.css"
import { useNavigate } from 'react-router-dom';
import brainly4 from '../../Assets/brainly4.jpg';
import { googleLogout, GoogleLogin } from '@react-oauth/google';


const FormNavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [activeUser, setActiveUser] = useState(localStorage.getItem("activeUser") );
  const [ profile, setProfile ] = useState([]);
  
  useEffect(() => {

    console.log('activeUser1:'+activeUser);

    localStorage.getItem("activeUser", JSON.stringify(activeUser));
  }, [activeUser]);


  const handleLogOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);
  }

  const handleHome =()=>{
    navigate('/home')
  }

  const handleShowUsers = () => {
    navigate('/users');
  }

  const handleShowDoctors = () => {
    navigate('/doctors');
  }

  const toggleMenu = (event) => {
    // event.stopPropagation();
    setShowMenu(!showMenu);
  }

  return (
    <nav className={style.navbar}>

      <div className={style.container}>

     <Link to='/home'>
      <img src={brainly4} className={style.brain}  width='100px' height='100px'/>
      </Link>
    
      <Link to="/about" >
            <button className={style.premium}>About
            </button></Link>

            
            <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>

            
{activeUser ? (
  <button className={style.premium} onClick={handleLogOut}>Cerrar sesión</button>
) : (
  <Link to='/signin'>
    <button className={style.premium} >Iniciar sesión</button>
  </Link>
)}

{console.log(activeUser)}


    <div className={style.dropdownContainer}>
        <button type='button' className={style.premium} onClick={(e) => {toggleMenu(); e.stopPropagation()}}>
         Nuestros usuarios
        </button>
          
          {showMenu && (
            <ul className={style.dropdownMenu}>
              <li className={style.usersmenu} onClick={handleShowUsers}>Pacientes</li>
              <li className={style.doctorsmenu} onClick={handleShowDoctors}>Doctores</li>
            </ul>
          )}
        </div>


    
    <button className={style.premium} onClick={handleHome}>Volver</button>
      


       <button className={style.premium} >Se Premium⭐</button>
      
      </div>

      

    </nav>
  )
}

export default FormNavBar;