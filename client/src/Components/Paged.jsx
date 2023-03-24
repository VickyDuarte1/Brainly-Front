import React from "react";

const Paged = ({ onClick, total, shown }) => {
 
  const showLoadMoreButton = shown < total;
  console.log('shown:'+shown+','+'total:'+total);
 
  return (

    <form>
      { showLoadMoreButton && (
        <button type="button" onClick={onClick}>
          Cargar más
        </button>
      )}
    </form>
  );
};

export default Paged;