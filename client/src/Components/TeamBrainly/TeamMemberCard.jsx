import React, { useState } from "react";
import style from "./TeamMemberCard.module.css";

const TeamMemberCard = ({ name, imageSrc, description }) => {


  return (
    <div className={style.container}>
      <div className={style.front}>
        <img className={style.image} src={imageSrc} alt="" />
      </div>
      <h2 className={style.name}>{name}</h2>
      <p className={style.description}>{description}</p>

      
        
    
       
        </div>
      
 
  );
};

export default TeamMemberCard;
