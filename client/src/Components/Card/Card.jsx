import React from 'react';
import style from './Card.module.css'
const Card = ({title, text, imageSrc}) =>{
    return (
    <div className={style.container}>
      <div className={style.front}>
    <img className = {style.image}src={imageSrc} alt="" />
    </div>
    <h2 className={style.title}>{title}</h2>
    <p className={style.text}>{text}</p>
  </div>
);
}


export default Card;