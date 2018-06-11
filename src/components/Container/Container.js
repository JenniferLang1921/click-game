import React from 'react';
import "./Container.css";

const Container = props => (
  <div className='container center-align main'>
  
    {props.children}
  </div>
)

export default Container;