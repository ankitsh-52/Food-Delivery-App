// import React from "react";
import "./public/app.css";
// import Home from "./components/Home";
import { Header } from "./components/Header";
// import { Body } from "./components/Body";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

