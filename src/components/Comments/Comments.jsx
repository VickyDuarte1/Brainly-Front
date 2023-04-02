import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import { getComments, createPost } from '../../Redux/actions';
import Comment from './Comment';
import Paged from '../Paged';
import Estrellas from './Estrellas';
import './comments.css';


export default function Comments() {
  const dispatch = useDispatch();
  const  comments  = useSelector((state) => state.comments)
  const comentarios = JSON.stringify(comments)
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const [activeUser, setActiveUser] = useState(localStorage.getItem('activeUser'));
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [newComment, setNewComment] = useState(null); 

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
    setCurrentCommentIndex(currentCommentIndex + 3);
  };

  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
    console.log(rating);
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));    
    dispatch(createPost({ texto: comment,  puntuacion: rating, usuario: activeUser.usuario , id: activeUser.id }));
    setNewComment({
      usuario_paciente: activeUser.usuario,
      comentario: comment,
      puntuacion: rating
    });

    setComment('')
    setRating('')
    console.log(activeUser.usuario);
  };


  return (
    <div>
      <NavBar />
      <div className="comment">
       
<div className='grilla'>
  {console.log('COMMENTS'+comments)}
 { console.log('COMMENTS'+JSON.stringify(comments))}
 


 { comments.comentarios && Array.isArray(comments.comentarios) && comments.comentarios.length > 0 ? (
    comments.comentarios.map((comment) => (
      <Comment
      key={comment.id}
     
        usuario_paciente={comment.usuario_paciente}
        comentario={comment.comentario}
        puntuacion={comment.puntuacion}
      />
    ))
  ) : (
    <p>No hay comentarios para mostrar</p>
  )}


</div>
{/* {        <Paged onClick={handleLoadMore} total={6} shown={3} /> */}
      </div>

      <div className='enviar'>

        {localStorage.getItem('activeUser') ? (
          <form onSubmit={handleCommentSubmit}>
            <div className='row-coment'>

              <div className='columna-comentar'>

                <div className=' juntos'>
                  <textarea placeholder="Escribir comentario" value={comment} onChange={handleCommentChange}>

                  </textarea>
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
        ) :
        
        (
          <div>
            <p>Inicia sesión para dejar un comentario.</p>
          </div>
        )}


      </div>
    </div>
  )
}