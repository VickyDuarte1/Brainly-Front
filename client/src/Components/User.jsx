import React from 'react';

export default function User( { id, name, gender, age, image, city} ) {
    
  return (
    <div className='user'>
       <h2>{id}</h2>
      <h2>{name}</h2>
      <h3> Age:{age} </h3>
      <h4>Gender: {gender}</h4>
      <img src={image}/>
      <h3>{city}</h3>
    </div>
  );
}