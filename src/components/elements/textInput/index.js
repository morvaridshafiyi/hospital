import React from "react";
import "./style.scss";

const TextInput = ({ value, label, required, onChange }) => {
  return (
    <div className="input-field">
      <input
        value={value}
        type="text"
        required={required}
        spellCheck="false"
        onChange={(e) => onChange(e.target.value)}
      />
      <label>{label}</label>
    </div>
  );
};
export default TextInput;
