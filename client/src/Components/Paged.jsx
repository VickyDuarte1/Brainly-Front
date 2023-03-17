import React from "react";

const Paged = ({ onClick, total, shown }) => {
  return (
    <form>
      {shown < total && (
        <button type="button" onClick={onClick}>
          Cargar más
        </button>
      )}
    </form>
  );
};

export default Paged;