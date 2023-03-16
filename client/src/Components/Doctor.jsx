import React from 'react';

export default function Doctor( { id, name, email, address, phone, speciality } ) {

  return (
    <div className='doctor'>
       <h2>{id}</h2>
      <h2>{name}</h2>
      <h3>Email: {email}</h3>
      <h3>adress: {address}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Speciality: {speciality}</h3>
    </div>
  );
}