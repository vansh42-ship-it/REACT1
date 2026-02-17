import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setDaata] = useState("");
  const getData = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    setData(data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3>Hello{idx}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
