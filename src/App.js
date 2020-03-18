import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      {/* <Header /> */}
      <LandingPage />
      <Footer />
      {/* <h1 style={{color: '#CB2431', borderColor: '#00f' }}> haloo </h1> */}
    </body>
  );
}

export default App;
