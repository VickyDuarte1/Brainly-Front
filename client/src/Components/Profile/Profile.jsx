import React from 'react';
import { useSelector } from 'react-redux';



const Profile = () => {
    const activeUser = useSelector((state) => state.activeUser);

    console.log(activeUser)
  
    return (
      <div>
        <h1>Profile</h1>
        <p>Nombre: {activeUser.nombre}</p>
        <p>Apellido: {activeUser.apellido}</p>
        <p>Edad: {activeUser.edad}</p>
        <p>Email: {activeUser.email}</p>
        {/* Agrega más campos según los datos que quieras mostrar */}
      </div>
    );
  };
  