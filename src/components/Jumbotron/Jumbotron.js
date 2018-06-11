import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (

 <div className="jumbotron jumbotron-fluid mt-5">
    
      <div className="container text-center">
        
      <h1>Monster Memory</h1>
 
        <h2>Try to click all of the monster pictures without clicking the same one twice!</h2>

        <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
        <h4>{props.info}</h4>
      </div>
    
  </div>
);

export default Jumbotron;