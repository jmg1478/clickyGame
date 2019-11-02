import React from "react";
import Jumbotron from "./components/Jumbotron";
import MainGameContainer from "./components/GameContainer";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainGameContainer /> 
  </div>
);

export default App;