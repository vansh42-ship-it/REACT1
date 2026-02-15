import React from "react";
import { MoveRight } from "lucide-react";
const RightCard = () => {
  return (
    <div className="h-full m-5 relative w-80 bg-red-500 rounded-4xl overflow-hidden ">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full bg-amber-300 flex flex-col justify-between">
        <h2 className="bg-white text-2xl rounded-full h-10 m-3 w-10 flex justify-center items-center">
          1
        </h2>
        <div>
          <p className="m-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            repellendus.
          </p>
          <div>
            <button className="m-5">Satisfied</button>
            <button>
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
