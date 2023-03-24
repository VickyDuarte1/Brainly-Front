import React from 'react';
import './users.css'


export default function User( { id, nombre, genero, edad, imagen, direccion} ) {
    
  return (
    <div className='user'>
      <div className='detailss2'>
       <h2>{id}</h2>
       <div className='name'> 
      <h2>{nombre}</h2>
      </div>
      
      <div className='detailsUser'>
      <div className='img' >
      <img src={imagen} whidth='110px' height="110px"/>
      </div>
      <div className='info'>
      <h4> Edad:{edad} </h4>
      <h4>Género:{genero}</h4>
      </div>
      </div>
      <div className='direccion'>
      <h4>Ciudad:{direccion}</h4>
      </div>
      </div>
    </div>
  );
}