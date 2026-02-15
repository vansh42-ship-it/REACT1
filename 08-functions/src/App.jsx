import React from "react";

const App = () => {
  const pageScrolling = () => {
    console.log("Page scrolling");
  };
  return (
    <div onWheel={pageScrolling}>
      <div className="Page1"></div>
      <div className="Page2"></div>
      <div className="Page3"></div>
    </div>
  );
};

export default App;
