import React from 'react';
import './estrella2.css'

export default function Estrellas(props) {

  const { rating, setHoverRating } = props; 
  const stars = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    let starClass = 'star';
    if (i <= rating || i <= props.savedRating) {
      starClass += ' active';
    }
    if (i <= props.hoveredRating) {
        starClass += ' hovered';
      }
      stars.push(
        <div
          key={i}
          className={starClass}
         
          onClick={() => props.setSavedRating(i)}
        >
          {i <= rating ? '⭐️' : '✰'}
    
        </div>)
   
  }


  return <div className="stars">{stars}</div>;
}