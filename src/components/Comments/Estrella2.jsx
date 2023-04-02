import React from 'react';

const Estrella2 = ({ puntuacion }) => {
  let estrellas = '';

  if (puntuacion === 1) {
    estrellas = '⭐️';
  } else if (puntuacion === 2) {
    estrellas = '⭐️⭐️';
  } else if (puntuacion === 3) {
    estrellas = '⭐️⭐️⭐️';
  } else if (puntuacion === 4) {
    estrellas = '⭐️⭐️⭐️⭐️';
  } else if (puntuacion === 5) {
    estrellas = '⭐️⭐️⭐️⭐️⭐️';
  }

  return <span>{estrellas}</span>;
};

export default Estrella2;