import React from 'react';
import './doctors.css';

export default function Doctor( { id, name, email, address, phone, speciality } ) {

  return (
    <div className='doctor'>
       <h2>{id}</h2>
      <h2> {name}</h2>
      <h3> {email}</h3>
      <h3> {address}</h3>
      <h3> {phone}</h3>
      <h3> {speciality}</h3>
    </div>
  );
}