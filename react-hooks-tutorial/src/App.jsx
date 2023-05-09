import { useState, useEffect, useContext } from "react";
import "./App.css";

{
  /*
useState: データの状態が変わったときにページ（の差分）をレンダリングする（レンダリングしないと内部的な更新に留まってしまう） 
useEffect: 発火のタイミングを決めることができる
useContext: propsのバケツリレーをしないためのHooks。大元に設置する
*/
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
    setCount(count + 1);
  }, []);
  // arg2: {empty: onMount, variable: onChange}
  // caution: if use StrictMode (default), call useEffect twice. but when Production, call useEffect once.

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>

      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
    </div>
  );
}

export default App;
