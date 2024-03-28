import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/logo.jpg";
import "./style/main.css";

//Components
import Body from "./componenets/Body";
import Header from "./componenets/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
