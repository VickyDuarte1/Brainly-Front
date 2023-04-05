import React from "react";
import { Button } from "reactstrap";
import './Home/comments.css';

const Paged = ({ onClick, total, shown }) => {
 
  const showLoadMoreButton = shown < total;
   console.log('shown:', shown, 'total:', total, 'onClick:', onClick);
 
 
  console.log('shown:'+shown+','+'total:'+total);
 
  return (

    <form>
      { showLoadMoreButton && (
       
      <div className="d-flex justify-content-center" > 
       <Button type="button" color= "primary"  onClick={onClick} >
          Cargar más
        </Button>
        </div>
      
      )}
    </form>
  );
};

export default Paged;
