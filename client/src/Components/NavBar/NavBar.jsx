import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css"
import { useNavigate } from 'react-router-dom';
import brainly4 from '../../Assets/brainly4.jpg'


const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

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
          <Link to='/form'>
          <button className={style.premium}>Registrarse</button>
          </Link>

          <button className={style.premium}>Ingresar</button>
          </div>

      <Link to='/subs'>
       <button className={style.premium}>Se Premium⭐</button>
       </Link>
      </div>

      

    </nav>
  )
}

export default NavBar;