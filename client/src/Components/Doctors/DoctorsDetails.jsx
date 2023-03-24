
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
import NavBar from '../NavBar/NavBar';

const DetailDoctor = () => {
    const navigate = useNavigate();

  const { id } = useParams();

  const doctors = useSelector((state) => state.doctores);
const doctor = doctors.find((doctor) => doctor.id === Number(id));

  if (!doctor) {
    return <div>No se encontró el doctor</div>;
  }

 function handleBackClick() {
    navigate('/doctors');
  }

  const numVowels = (doctor.nombre.match(/a/gi) || []).length;
  ;

  return (
    <div>
      <NavBar/>
      <h2>Doctor:</h2>

      <div className='doctorDetail'>
        <button className='closeDetail' onClick={handleBackClick}>x</button>
      <ul>
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
        <p className='nombre'>Nombre: {doctor.nombre}</p>
        <p className='usuario'>Usuario: {doctor.usuario}</p>
        <p className='correo'>E-mail:{doctor.correo}</p>
        <p className='telefono'>Teléfono: {doctor.telefono}</p>
       
        </div>
        </div>
        <div className='card-footer'>
        <div className='dir'>Dirección: {doctor.direccion} </div>
        
        <div className='spec'>Especialidad: {doctor.especialidad} || N° de matrícula: {doctor.credenciales}</div>
        
        </div>
       
      </ul>
      </div>
    </div>
  );
};


export default DetailDoctor;

