import React from "react";
import logo from "./logo.svg";
import "./App.css";
import profileImage from "./img/alcatraz-black.png";

function App() {
  return (
    <div className="App">
      <h1> Hello there! </h1>
      <h2> Author: MHP </h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
