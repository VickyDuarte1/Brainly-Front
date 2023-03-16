import React from 'react';
import './users.css'


export default function User( { id, name, gender, age, image, city} ) {
    
  return (
    <div className='user'>
       <h2>{id}</h2>
       <div className='name'> 
      <h2>{name}</h2>
      </div>
      
      <div className='detailsUser'>
      <div className='img'>
      <img src={image}/>
      </div>
      <div className='info'>
      <h4> Edad:{age} </h4>
      <h4>Género:{gender}</h4>
      </div>
      </div>
      <div className='city'>
      <h4>Ciudad:{city}</h4>
      </div>
    </div>
  );
}