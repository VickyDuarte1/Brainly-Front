import React from 'react';
import '../../Redux/coments.json'

export default function Coment( {id, nombre, correo, comentario, tipo_usuario } ) {
 
  return (
    <div className='comments'>
     <p>ID: {id}</p>
      <h2 className='nombre-u'>Nombre: {nombre}</h2>
      <h3 className='correo-u'> {correo}</h3>
      <h4> comentario: {comentario}</h4>
      <div>{tipo_usuario}</div>
    </div>
  );
}