import React from "react";

const App = () => {
  const user = {
    username: "Sarthak",
    age: 18,
    city: "Bhopal",
  };
  localStorage.setItem("user", JSON.stringify(user));
  const userb = JSON.parse(localStorage.getItem("user"));
  console.log(userb);
  return <div>APP</div>;
};

export default App;
