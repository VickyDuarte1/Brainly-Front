import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleShowUsers = () =>{
    navigate('/users');
  }

  const handleShowDoctors = () =>{
    navigate('/doctors');
  }


  return (
    <div className='home'>
      <h1>Bienvenido al home </h1>
      <button onClick={handleShowUsers}>Usuarios</button>
      <button onClick={handleShowDoctors}>Doctores</button>
    </div>
  );
}