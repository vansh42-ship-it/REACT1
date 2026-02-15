import React from "react";
import { MoveUpRight } from "lucide-react";
import HeroTest from "./HeroTest";
const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between ">
      <div>
        <HeroTest />
      </div>
      <div className="">
        <MoveUpRight size={80} />
      </div>
    </div>
  );
};

export default LeftContent;
