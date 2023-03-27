import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css"
import { useNavigate } from 'react-router-dom';
import brainly4 from '../../Assets/brainly4.jpg'
import { googleLogout, GoogleLogin } from '@react-oauth/google';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [activeUser, setActiveUser] = useState(localStorage.getItem("activeUser") );
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);

  useEffect(() => {
    setActiveUser(localStorage.getItem("activeUser"));
  }, [localStorage.getItem("activeUser")]);



  const handleLogOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);
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

  const logOut = () => {
    googleLogout();
    setProfile(null);
};


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

{console.log('activeUser2:'+activeUser)}

{activeUser ? (
  <button className={style.premium} onClick={handleLogOut}>Cerrar sesión</button>
) : (
  <Link to='/signin'>
    <button className={style.premium} >Iniciar sesión</button>
  </Link>
)}

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
            <div>
       
        </div>
        
        
{!activeUser && (
  <Link to='/form'>
    <button className={style.premium}>Log In</button>
  </Link>
)}

<div>
   
<Link to='https://dashboard-brainly.vercel.app/'>
       <button className={style.premium} > Dashboard </button>
       </Link>
      </div>

      
      <Link to='/subs'>
       <button className={style.premium} >Se Premium⭐</button>
       </Link>
      </div>

      

    </nav>
  )
}

export default NavBar;