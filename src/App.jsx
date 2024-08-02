import { useState } from "react";
import ButtonMinus from "./components/ButtonMinus";
import ButtonPlus from "./components/ButtonPlus";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  function minusClick() {
    setCount(count - 1);
  }

  function plusClick() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center space-x-4">
        <ButtonMinus onClick={minusClick} />
        <span className="text-x1 font-medium">{count}</span>
        <ButtonPlus onClick={plusClick} />
      </div>
    </div>
  );
}

export default App;
