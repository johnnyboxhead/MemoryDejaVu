import React from "react";
import "./Wave.css";

const Wave = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.selectWave(props.id)} className="remove"/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
  
  export default Wave
  