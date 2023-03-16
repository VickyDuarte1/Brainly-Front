
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailDoctor = () => {
    const navigate = useNavigate();

  const { id } = useParams();

  const doctors = useSelector((state) => state.doctors);
const doctor = doctors.find((doctor) => doctor.id === Number(id));

  if (!doctor) {
    return <div>No se encontró el doctor</div>;
  }

 function handleBackClick() {
    navigate('/doctors');
  }

  return (
    <div>
      <h2>Detail doctor</h2>

      <div className='doctorDetail'>
        <button className='closeDetail' onClick={handleBackClick}>x</button>
      <ul>
        <p>Nombre: {doctor.name}</p>
        <p>E-mail:{doctor.email}</p>
        <p>Teléfono: {doctor.phone}</p>
        <p>Dirección: {doctor.address.city}</p>
        <p>Especialidad: {doctor.speciality}</p>
        <p>N° de matrícula: {doctor.registration}</p>
      </ul>
      </div>
    </div>
  );
};
/**
{
    "id": 1,
    "name": "Leanne Graham",
    "speciality":"neurologist",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough"
    },
    "phone": 1770736803156442,
    "registration": "A234DD27"
  },
  
  */

export default DetailDoctor;

