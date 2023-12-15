import React from "react";
import "./style.scss";

const RadioButton = ({ items, title, onChange, value }) => {
  return (
    <div className="radio-button" onChange={(e) => onChange(e.target.value)}>
      <span className="title">{title}</span>
      {items && items.length > 0
        ? items.map((item) => {
            return (
              <div className="item">
                <input
                  type="radio"
                  checked={item.label === value ? true : false}
                  value={item.label}
                  name={item.name}
                />{" "}
                {item.label}
              </div>
            );
          })
        : null}
    </div>
  );
};
export default RadioButton;
