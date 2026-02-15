import React from "react";
import astronaut from "./assets/astronoaut.avif";

const Card = (props) => {
  console.log(props);
  return (
    <div className="parent">
      <div className="card">
        <img src={props.img} alt="astronaut" />
        <h1>{props.user}</h1>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
