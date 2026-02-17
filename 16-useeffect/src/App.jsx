import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  function aChanging() {
    console.log("A ki value change ho gyi");
  }
  function bChanging() {
    console.log("B ki value change ho gyi");
  }
  useEffect(
    function () {
      console.log("Use effect is running");
    },
    [a, b],
  );

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          seta(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setb(b + 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
