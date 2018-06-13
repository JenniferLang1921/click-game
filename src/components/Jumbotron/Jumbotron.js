import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (

  <div className="jumbotron jumbotron-fluid text-center" style={{backgroundImage: `url(${props.backgroundImage})`}}>

      <h1><span className="span">Monster Memory</span></h1>

      <h2><span className="span">Try to click all of the monster pictures without clicking the same one twice!</span></h2>

      <h3><span className="span">Score: {props.score} | Top Score: {props.topScore}</span></h3>
      <h4><span className="span">{props.info}</span></h4>
    </div>

  
);



  export default Jumbotron;