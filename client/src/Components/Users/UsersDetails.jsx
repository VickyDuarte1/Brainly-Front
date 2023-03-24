
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import './users.css'

const DetailUser = () => {
    const navigate = useNavigate();

  const { id } = useParams();

  const pacientes = useSelector((state) => state.pacientes);
const user = pacientes.find((pacientes) => pacientes.id === Number(id));
  if (!user) {

    return <div>No se encontró el usuario</div>;
  }
 function handleBackClick() {
    navigate('/users');
  }

  return (
    <div>
      <NavBar/>
      <h2>Datos Paciente</h2>

      <div className='userDetail'>
        <button className='closeDetail' onClick={handleBackClick}>x</button>

        <div className='detailss'>

        <div className='detailss2'>Nombre: {user.nombre}</div>
        <p>E-mail:{user.correo}</p>
        <p>Teléfono: {user.telefono}</p>
        <p>Edad: {user.edad}</p>
        <p>Nacimiento: {user.fecha_nacimiento}</p>
        <p> {user.genero}</p>
        <p>Dirección: {user.direccion}</p>
        </div>

       
          <img className='image-user' src={user.imagen} alt={user.nombre} width="230" height="230" />
        </div>

      
      
    </div>
  );
};


export default DetailUser;

