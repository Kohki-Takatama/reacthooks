import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>UseState</h1>
      {/* データの状態が変わったときにページ（の差分）をレンダリングする（レンダリングしないと内部的な更新に留まってしまう） */}
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
