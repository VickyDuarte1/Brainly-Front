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
    <div>
      <h1>Welcome to home </h1>
      <button onClick={handleShowUsers}>Show users</button>
      <button onClick={handleShowDoctors}>Show doctors</button>
    </div>
  );
}