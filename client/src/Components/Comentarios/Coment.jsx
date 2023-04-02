import React from 'react';
import '../../Redux/coments.json';
import './comments.css';

export default function Coment( {id, paciente_id, puntuacion, usuario_paciente, comentario} ) {
 
  return (
    <div className='comments'>

    <div className='columna2-com'>
    <h2 className='nombre-u'> {id}</h2>
    <h2>{paciente_id}</h2>
      <h4>  {usuario_paciente}</h4>
      <h4>{comentario}</h4>
      <div>{puntuacion}</div>
      </div>
    </div>
  );
}

/**
 *  {
      "comentario": "Resultado muy acertivo, es de fiar",
      "id": 1,
      "paciente_id": 1,
      "puntuacion": 5,
      "usuario_paciente": null
    },
 */