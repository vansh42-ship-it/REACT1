import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <Card
        user="aman"
        age={18}
        img="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/11_24_Lambo_V12/COVER_Vision-GT.jpg"
      />
      <Card
        user="Sarthak"
        age={21}
        img="https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter-5.png?isig=0&q=80"
      />
    </div>
  );
};

export default App;
