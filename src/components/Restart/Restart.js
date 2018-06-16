import React from "react";
import "./Restart.css";

const Restart = props => <button onClick={props.restartWaves} className="restart">{props.children}</button>;

export default Restart;
