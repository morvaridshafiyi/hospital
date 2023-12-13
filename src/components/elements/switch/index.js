import { useState } from "react";
import "./style.scss";
const Switch = ({ label, onClick }) => {
  const [value, setValue] = useState(false);

  return (
    <div className="switch-container">
      <label className="switch" onClick={(e) => onClick(/^true$/i.test(e.target.value))}>
        <input type="checkbox" value={value} onClick={() => setValue(!value)} />{" "}
        <div></div>
      </label>
      <span className="title">{label}</span>
    </div>
  );
};
export default Switch;
