import React from 'react';
import './doctors.css';


export default function Doctor( {nombre, correo, direccion, telefono, especialidad } ) {


  return (
    <div className='doctor'>
      
      <h2 className='d-name'> {nombre}</h2>
      <h3 className='d-email'> {correo}</h3>
      <h3 className='d-address'> {direccion}</h3>
      <h3 className='d-phone'> {telefono}</h3>
      <h3 className='d-speciality'> {especialidad}</h3>
    </div>
  );
}