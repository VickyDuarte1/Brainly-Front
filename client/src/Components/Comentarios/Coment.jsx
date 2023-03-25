import React from 'react';
import '../../Redux/coments.json'

export default function Coment( {id, nombre, correo, comentario, tipo_usuario } ) {
 
  return (
    <div className='doctor'>
     <p>ID: {id}</p>
      <h2 className='d-name'>Nombre: {nombre}</h2>
      <h3 className='d-email'> {correo}</h3>
      <h4> comentario: {comentario}</h4>
      <div>{tipo_usuario}</div>
    </div>
  );
}