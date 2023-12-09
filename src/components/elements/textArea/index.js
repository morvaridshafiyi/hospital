import React from "react";
import "./style.scss";

const TextArea = ({value, label, required, onChange , cols}) => {
  return (
    <div className="text-area">
      <textarea
        value={value}
        required={required}
        rows={cols}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
      />
      <label>{label}</label>
    </div>
  );
};
export default TextArea;
