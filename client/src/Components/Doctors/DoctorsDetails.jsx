
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import doctor1 from '../../Assets/doctor1.jpg'
import doctor2 from '../../Assets/doctor2.png'
import doctor3 from '../../Assets/doctor3.jpg'
import doctor4 from '../../Assets/doctor4.webp'
import doctor5 from '../../Assets/doctor5.jpeg'
import doctor6 from '../../Assets/doctor6.jpeg'
import doctor7 from '../../Assets/doctor7.jpeg'
import doctor8 from '../../Assets/doctor8.jpeg'


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


  const numVowels = (doctor.name.match(/a/gi) || []).length;
  ;


  return (
    <div>
      <h2>Doctor:</h2>

      <div className='doctorDetail'>
        <button className='closeDetail' onClick={handleBackClick}>x</button>
      <ul>


        <p>Nombre: {doctor.name}</p>
        <p>E-mail:{doctor.email}</p>
        <p>Teléfono: {doctor.phone}</p>
        <p>Dirección: {doctor.address.city}</p>
        <p>Especialidad: {doctor.speciality}</p>
        <p>N° de matrícula: {doctor.registration}</p>

     <div className='tarjeta1'>
      {numVowels >= 3 && doctor.id % 2 === 0 && <img src={doctor1} alt="Imagen con 3 vocales" width="250" height="250"/>}
      {numVowels >= 3 && doctor.id % 2 === 1 && <img src={doctor2} alt="Imagen con 3 vocales" width="250" height="250"/>}
      
      {numVowels === 2 && doctor.id % 2 === 0 && <img src={doctor3} alt="Imagen con 2 vocales" width="250" height="250"/>}
      {numVowels ===2 && doctor.id % 2 === 1 && <img src={doctor4} alt="Imagen con 3 vocales" width="250" height="250"/>}

      {numVowels === 1 && doctor.id % 2 === 1 && <img src={doctor5} alt="Imagen con 3 vocales" width="250" height="250"/>}
      {numVowels === 1 && doctor.id % 2 === 0 && <img src={doctor6} alt="Imagen con 3 vocales" width="250" height="250"/>}

      {numVowels === 0 && doctor.id % 2 === 1 && <img src={doctor7} alt="Imagen con 3 vocales" width="250" height="250"/>}
      {numVowels === 0 && doctor.id % 2 === 0 && <img src={doctor8} alt="Imagen con 3 vocales" width="250" height="250"/>}

      <div className='columna2'>
        <p className='name'>Nombre: {doctor.name}</p>
        <p className='username'>Usuario: {doctor.username}</p>
        <p className='email'>E-mail:{doctor.email}</p>
        <p className='tel'>Teléfono: {doctor.phone}</p>
       
        </div>
        </div>
        <div classname='card-footer'>
        <div className='dir'>Dirección: {doctor.suite} {doctor.street}, {doctor.address}</div>
        
        <div className='spec'>Especialidad: {doctor.speciality} || N° de matrícula: {doctor.registration}</div>
        
        </div>
       

      </ul>
      </div>
    </div>
  );
};

  
  */

export default DetailDoctor;

