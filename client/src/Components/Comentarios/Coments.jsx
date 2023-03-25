import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import { getComments } from '../../Redux/actions';
import Coment from './Coment';


export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const handleNextComment = () => {
    if (currentCommentIndex < comments.length - 1) {
      setCurrentCommentIndex(currentCommentIndex + 1);
    }
  };

  const handlePrevComment = () => {
    if (currentCommentIndex > 0) {
      setCurrentCommentIndex(currentCommentIndex - 1);
    }
  };
  return (
    <div>
      <NavBar/>
    <div className="comment">
  {comments && comments.map((comment, index) => (
    <Coment
      key={comment.id}
      id={comment.id}
      nombre={comment.name}
      correo={comment.email}
      comentario={comment.comentario}
      tipo_usuario={comment.tipo_usuario}
      hidden={index !== currentCommentIndex}
    />
  ))}
</div>
      <div className="comment-navigation">
        <button onClick={handlePrevComment}>Anterior</button>
        <button onClick={handleNextComment}>Siguiente</button>
      </div>
    </div>
  )}