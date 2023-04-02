import React from 'react';
import './doctors.css';


export default function Doctor( {id, nombre, correo, direccion, telefono, especialidad } ) {
 

  return (
    <tr className='doctor'>
     
      <td className='d-name'> {nombre}</td>
      <td className='d-email'> {correo}</td>
      <td className='d-address'> {direccion}</td>
      <td className='d-phone'> {telefono}</td>
      <td className='d-speciality'> {especialidad}</td>
      {/* <p>ID: {id}</p> */}
      
    </tr>
  );
}

/**
 *   <tr>
                        <td className="text-center">2</td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 99,201</td>
                        <td className="text-right">
                            <Button className="btn-icon btn-round" color="info" size="sm">
                                <i className="fa fa-user"></i>
                            </Button>{` `}
                            <Button className="btn-icon btn-round" color="success" size="sm">
                                <i className="fa fa-edit"></i>
                            </Button>{` `}
                            <Button className="btn-icon btn-round" color="danger" size="sm">
                                <i className="fa fa-times" />
                            </Button>{` `}
                        </td>
                    </tr>
 */