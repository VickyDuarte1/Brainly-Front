import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getDoctors, getUsers } from "../../Redux/actions";
import brainly4 from '../../Assets/brainly4.jpg';
import { googleLogout, GoogleLogin } from '@react-oauth/google';
import * as jose from 'jose';

import "./signin.css";

export default function SignIn() {
  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem("activeUser")) || null);
  const pacientes = useSelector((state) => state.pacientes);
  const doctores = useSelector((state)=> state.doctores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getDoctors());

  }, [dispatch]);

  function findUser(username, password) {
    const user = pacientes.find(
      (user) => user.usuario === username && user.contraseña === password
    )
    if (user) {
     setActiveUser({ ...user, activeUser: true });
      localStorage.setItem("activeUser", JSON.stringify({ ...user, activeUser: true, tipo_user:'paciente', contraseña:'*****' }));
      return user;
    } else {
    const  doctor = doctores.find(
        (doctor) => doctor.usuario === username && doctor.contraseña === password
      )
      if (doctor) {
        setActiveUser({ ...doctor, activeUser: true });
        localStorage.setItem("activeUser", JSON.stringify({ ...doctor, activeUser: true, tipo_user:'doctor', contraseña:'*****' }));
        return doctor;
      }

    }
    return null;
  }
  
  const handleSignIn = (event) => {
    event.preventDefault();
    const usuario = event.target.usuario.value;
    const contraseña = event.target.contraseña.value;
    const usuarioact = findUser(usuario, contraseña);

  //EN USUARIOACT ESTA LA INFO DEL USUARIO COMPLETA DEL USUARIO

    if (!usuarioact) {
      // Muestra mensaje de error si el usuario no existe
      alert("Usuario o contraseña incorrectos");
      return;
    }
  }
 


  const handleLogOut = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);
  }

  function findUserGoogle(correo) {
    const paciente = pacientes.find((user) => user.correo === correo);
    if (paciente) {
      setActiveUser({ ...paciente, activeUser: true });
      localStorage.setItem(
        "activeUser",
        JSON.stringify({
          ...paciente,
          activeUser: true,
          tipo_user: "paciente",
          contraseña: "*****",
        })
      );
    } else {
      const doctor = doctores.find((doctor) => doctor.correo === correo);
      if (doctor) {
        setActiveUser({ ...doctor, activeUser: true });
        localStorage.setItem(
          "activeUser",
          JSON.stringify({
            ...doctor,
            activeUser: true,
            tipo_user: "doctor",
            contraseña: "*****",
          })
        );
      } else {
        alert("Usuario no encontrado");
      }
    }
  }
  

  function handleUser(user) {
    if (user) {
      setActiveUser(user);
    } 
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

  <GoogleLogin
  onSuccess={credentialResponse => {
   const credential= credentialResponse
   const token= credential.credential
   const secretKey= credential.secretKey
   const decodedToken = jose.decodeJwt(token, secretKey);
   const correo=decodedToken.email
  

   console.log(decodedToken.sub); 
   console.log(decodedToken.name); 
   console.log(decodedToken.email); 
   findUserGoogle(correo);
   handleUser(findUserGoogle(correo));
   

  }}
  onError={() => {
    console.log('Inicio de sesión fallido');
    
    
  }}
/>

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

