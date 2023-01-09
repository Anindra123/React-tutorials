import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Your click count ${count}`;
  });

  return (
    <div>
      <p>Number of times clicked : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
