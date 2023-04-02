import React from 'react';
import Estrella2 from './Estrella2';
import '../Home/comments.css';




export default function Comment( { puntuacion, usuario_paciente, comentario} ) {
 
  return (
    <div className='comments'>

    <div className='columna2-com'>
   
      <div className='usuario-user '>{usuario_paciente}</div>
      <div className='usuario-text '>{comentario}</div>
      
      <Estrella2 puntuacion={puntuacion}/>

      </div>
    </div>
  );
}
