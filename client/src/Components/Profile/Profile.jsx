import React from 'react';
import UserCloudinary from '../UserCloudinary/UserCloudinary';
import { Link } from 'react-router-dom';




const Profile = () => {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
 console.log(activeUser)
  
    return (
      <div>
        <h1>Hola, {activeUser.nombre}</h1>
        <p>Nombre: {activeUser.nombre} {activeUser.apellido}</p>

        <p>Edad: {activeUser.edad}</p>
        <p>Email: {activeUser.correo}</p>
        <p>Teléfono: {activeUser.telefono}</p>
        <p>Hola Shorsh</p>
        <UserCloudinary/>
        <hr/>
     <Link to ='/comments'>
     <button>Dejar comentario</button>
     </Link>
     
      </div>

      );
}
   export default Profile;