import React from 'react';
import './doctors.css';

export default function Doctor( { id, name, email, address, phone, speciality } ) {

  return (
    <div className='doctor'>
      
      <h2 className='d-name'> {name}</h2>
      <h3 className='d-email'> {email}</h3>
      <h3 className='d-address'> {address}</h3>
      <h3 className='d-phone'> {phone}</h3>
      <h3 className='d-speciality'> {speciality}</h3>
    </div>
  );
}