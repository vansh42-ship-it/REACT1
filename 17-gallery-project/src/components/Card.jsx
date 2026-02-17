import React from "react";

const Card = (props) => {
  return (
    <div className="text-center">
      <a href={props.elem.url} target="_blank" rel="noreferrer">
        <div className="h-40 w-44 rounded-xl overflow-hidden bg-zinc-800">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt={props.elem.author}
          />
        </div>
        <h2 className="font-bold text-lg mt-2 truncate w-44">
          {props.elem.author}
        </h2>
      </a>
    </div>
  );
};

export default Card;
