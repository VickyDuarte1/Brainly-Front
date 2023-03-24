import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors, getUsers } from "../../Redux/actions";
import brainly4 from '../../Assets/brainly4.jpg'

import "./signin.css";

export default function SignIn() {
  const [activeUser, setActiveUser] = useState(localStorage.getItem("activeUser") || null);

  const pacientes = useSelector((state) => state.pacientes);

  const doctores = useSelector((state)=> state.doctores);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getDoctors());

    const userFromStorage = localStorage.getItem("activeUser");
    if (userFromStorage) {
      setActiveUser(JSON.parse(userFromStorage));
    }
  }, [dispatch]);

  function findUser(username, password) {
    const user = pacientes.find(
      (user) => user.usuario === username && user.contraseña === password
    )
    if (user) {
      setActiveUser({ nombre: user.nombre, activeUser: true });
      localStorage.setItem("activeUser", JSON.stringify({ nombre: user.nombre, activeUser: true }));
      return user;
    } else {
    const  doctor = doctores.find(
        (doctor) => doctor.usuario === username && doctor.contraseña === password
      )
      if (doctor) {
        setActiveUser({ nombre: doctor.nombre, activeUser: true });
        localStorage.setItem("activeUser", JSON.stringify({ nombre: doctor.nombre, activeUser: true }));
        return doctor;
      }
    }
    
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const usuario = event.target.usuario.value;
    const contraseña = event.target.contraseña.value;
    const usuarioact = findUser(usuario, contraseña);
    if(usuarioact) console.log(usuarioact);

    if (!usuarioact) {
      // Muestra mensaje de error si el usuario no existe
      alert("Usuario o contraseña incorrectos");
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);
  }

  return (
    
    <div className="todo">
  
      <div>
        <NavBar />
      </div>
      <div className="back-form">
      <form onSubmit={handleSignIn}>
        <div className="top">
        <img src={brainly4} className='brain'  width='170px' height='170px'/>
        </div>

        <div className="align">
        <div className="signin">
          Usuaio:
          <input type="text" name="usuario" placeholder="Usuario" />
        </div>
        <div>
          <div className="password">
          <label>Contraseña:</label>
            <input type="password" name="contraseña" placeholder="Contraseña" />
          </div>
        </div>
        {activeUser && <p className="welcomeuser">Bienvenido {activeUser.nombre}</p>}

        {!activeUser && <button type="submit">Iniciar sesión</button>}        
        {activeUser && (
          <button onClick={handleLogOut}>Cerrar sesión</button>
        )}
        </div>
      </form>
            
    </div>
    
    </div>
    
  );
}

