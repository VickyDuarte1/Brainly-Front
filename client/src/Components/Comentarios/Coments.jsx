import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import { getComments } from '../../Redux/actions';
import Coment from './Coment';
import Paged from '../Paged';
import Estrellas from './Estrellas';
import './comments.css';


export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const [activeUser, setActiveUser] = useState(localStorage.getItem('activeUser'));
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSaveRating = (rating) => {
    setRating(rating);
  };

  
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  useEffect(() => {
    const handleStorageChange = () => {
      const prevActiveUser = activeUser;
      setActiveUser(localStorage.getItem('activeUser'));
      if (prevActiveUser && !localStorage.getItem('activeUser')) {
        window.location.reload();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [activeUser]);
  
  const [prevActiveUser, setPrevActiveUser] = useState(activeUser);
  
  useEffect(() => {
    setPrevActiveUser(activeUser);
  }, [activeUser]);
  
  useEffect(() => {
    if (prevActiveUser && !activeUser) {
      window.location.reload();
    }
  }, [prevActiveUser, activeUser]);


  const [toShow, setToShow] = useState(3); 


  const handleLoadMore = () => {
    setToShow(toShow + 3);
  };


  return (
    <div>
      <NavBar />
      <div className="comment">
       <div className='grilla'>
        {comments &&
         comments.slice(0, toShow).map((comment, index) => (
          <Coment
            key={comment.id}
            id={comment.id}
            nombre={comment.name}
            comentario={comment.comentario}
            tipo_usuario={comment.tipo_usuario}
            image={comment.image}
            hidden={index !== currentCommentIndex}
          />
        ))}

</div>
<Paged onClick={handleLoadMore} total={6} shown={3} />

      </div>
  
    <div className='enviar'>

      {localStorage.getItem('activeUser') ? (
        
      <form>
        <div className='row-coment'>

       <div className='columna-comentar'> 

        <div className=' juntos'>
        <textarea placeholder="Escribir comentario"></textarea>
        </div>

        <div className='columna-comentar'>
        <Estrellas rating={rating} setSavedRating={handleSaveRating} hoverRating={hoverRating} setHoverRating={setHoverRating} />
        </div>
        </div>
        <div className='columna-enviar'>
        <button type="submit">Enviar comentario</button>
        </div>
      </div>
      </form>
    ) : (
      <div>
        <p>Inicia sesión para dejar un comentario.</p>
      </div>
    )}
</div>
    </div>
  )}