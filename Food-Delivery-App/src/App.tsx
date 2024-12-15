// import React from "react";
import "./public/app.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import LikeButton from "./components/likeButton";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <LikeButton />
    </div>
  );
}

export default App;

