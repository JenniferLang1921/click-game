import React from 'react';
import "./CountryCard.css";

const CountryCard = props => (

    <div className="card">
        
      <img
                className="img-fluid"
                onClick={props.onClick}
                src={props.image}
                alt={props.name} />
        </div>
    

);

export default CountryCard;
