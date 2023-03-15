import React from 'react';

const Card = ({title, text, imageSrc}) =>{
    return (
    <div className="card">
    <img src={imageSrc} alt="" />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);
}


export default Card;