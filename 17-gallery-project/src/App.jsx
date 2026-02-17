import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/card";
const App = () => {
  const [index, setindex] = useState(1);
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    setUserData(response.data);
    console.log(response.data);
  };
  useEffect(
    function () {
      getData();
    },
    [index],
  );
  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-48/100 ">
      LOADING...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <Card elem={elem} />;
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white pb-24">
      {/* Added pb-24 (padding-bottom) so the last row of cards isn't hidden behind the buttons */}

      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>

      {/* This is the fixed navigation bar */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center items-center p-6 gap-4 bg-black/80 backdrop-blur-md border-t border-zinc-800">
        <button
          disabled={index === 1}
          className={`rounded px-4 py-2 font-semibold text-sm  active:scale-95 ${
            index === 1
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-amber-400 text-black cursor-pointer"
          }`}
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        <span className="font-mono text-amber-400">Page {index}</span>

        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
          onClick={() => {
            setindex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
