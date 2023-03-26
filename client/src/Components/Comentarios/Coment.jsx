import React from 'react';
import '../../Redux/coments.json';
import './comments.css';

export default function Coment( {id, nombre, correo, comentario, tipo_usuario, image } ) {
 
  return (
    <div className='comments'>
     

     
     <img src={image} className='img-c' whidth='110px' height="110px"/>
    
  
     


    <div className='columna2-com'>
    <h2 className='nombre-u'> {nombre}</h2>
      <h4>  {comentario}</h4>
      <div>⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  );
}