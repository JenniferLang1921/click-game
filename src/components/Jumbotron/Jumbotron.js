import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (

 <div className="jumbotron jumbotron-fluid mt-5">
    
      <div className="container ">
        
      <h2>Travel Around The World In Twelve Clicks</h2>
 

  <h4>{props.info}</h4>

  <h3>Score: {props.score} | Top Score: {props.topScore}</h3>

        <p>Click the countries without travelling to the same place twice!</p>
      </div>
    
  </div>
);

export default Jumbotron;