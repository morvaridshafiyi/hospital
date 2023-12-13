import { useState } from "react";
import "./style.scss";
const Switch = ({label}) => {
  const [value , setValue] =useState(false)
  return (
    <div className="switch-container">
      <label className="switch" onClick={()=>setValue(!value)}>
        <input type="checkbox" /> <div></div>
      </label>
      <span className="title">{label}</span>
    </div>
  );
};
export default Switch;
