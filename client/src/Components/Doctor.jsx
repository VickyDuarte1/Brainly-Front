import React from 'react';

export default function Doctor( { id, name, email, address, phone, speciality } ) {

  return (
    <div className='doctor'>
       <h2>{id}</h2>
      <h2>{name}</h2>
      <h3>Email: {email}</h3>
      <h3>Direccion: {address}</h3>
      <h3>Teléfono: {phone}</h3>
      <h3>Especialidad: {speciality}</h3>
    </div>
  );
}