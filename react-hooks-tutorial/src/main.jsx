import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const userInfo = {
  kohki: {
    name: "kohki",
    age: 22,
  },
  toshi: {
    name: "toshi",
    age: 22,
  },
};

const Context = createContext(userInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider value={userInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

export default Context;
