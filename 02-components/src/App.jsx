import React from "react";
import Card from "./Card";
import Navbar from "./navbar";
const App = () => {
  const user = "Vansh Kumar";
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="Nard">
        <Card />
      </div>
    </div>
  );
};

export default App;
