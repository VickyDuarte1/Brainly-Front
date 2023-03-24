import React from 'react';
import { useState } from 'react';
import style from './Card.module.css'


const Card = ({title, text, imageSrc, fullText}) =>{
  const[showPopUp, setShowPopUp]= useState(false);
    return (
    <div className={style.container}>
      <div className={style.front}>
    <img className = {style.image}src={imageSrc} alt="" />
    </div>
    <h2 className={style.title}>{title}</h2>
    <p className={style.text}>{text}</p>
    <button onClick={() => setShowPopUp(true)}>Leer más...</button>
    {showPopUp && (
      <div className={style.popup}>
        <div className={style.popupContent}>
          <h2>{title}</h2>
          <p>{fullText}</p>
          <button onClick ={() => setShowPopUp(false)}>Cerrar</button>
        </div>
      </div>
    )}
  </div>
);
}


export default Card;