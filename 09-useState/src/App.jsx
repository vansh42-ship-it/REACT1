import react, { useState } from "react";
const App = () => {
  const [num, setNum] = useState([10, 20]);
  const [num2, setNum2] = useState(10);
  const btnClicked = () => {
    // const newNum = [...num];
    // newNum.push(30);
    // setNum(newNum);
    setNum2(num2 + 1);
    setNum2(num2 + 1);
    setNum2(num2 + 1);
  };
  const btnClicked2 = () => {
    setNum2((prev) => prev + 1);
    setNum2((prev) => prev + 1);
    setNum2((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{num2}</h1>
      <button onClick={btnClicked}>Click</button>
      <button onClick={btnClicked2}>Click2</button>
    </div>
  );
};

export default App;
