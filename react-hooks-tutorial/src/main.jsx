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

const test = "test clear";

const UserInfo = createContext(userInfo.toshi);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<UserInfo.Provider value={userInfo.toshi}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //</UserInfo.Provider>*/
);

//export default userInfo;
export default test;
