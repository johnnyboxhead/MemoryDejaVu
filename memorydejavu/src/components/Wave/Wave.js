import React from "react";
import "./Wave.css";

const Wave = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
      <span onClick={() => props.selectWave(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
  
  export default Wave
  