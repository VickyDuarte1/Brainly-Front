
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailUser = () => {
    const navigate = useNavigate();

  const { id } = useParams();
  const users = useSelector((state) => state.users);
const user = users.find((user) => user.id === id);
  if (!user) {
    return <div>No se encontró el usuario</div>;
  }
 function handleBackClick() {
    navigate('/users');
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  return (
    <div>
      <h2>Detail User</h2>

      <div className='userDetail'>
        <button className='closeDetail' onClick={handleBackClick}>x</button>
      

        <div className='detailss'>

        <p>Nombre: {user.name}</p>
        <p>E-mail:{user.email}</p>
        <p>Teléfono: {user.cell}</p>
        <p>Edad: {user.age}</p>
        <p>Nacimiento: {formatDate(user.date)}</p>
        <p> {user.gender}</p>
        <p>Dirección: {user.city}</p>
        </div>

       
          <img className='image-user' src={user.image} alt={user.name} width="230" height="230" />
        </div>

      
      
    </div>
  );
};


export default DetailUser;

