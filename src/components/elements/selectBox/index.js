import React, { useState } from "react";
import "./style.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const SelectBox = ({ value, label, options, onChange }) => {
  const [open, setOpen] = useState(false);

  const openTrigger = () => {
    setOpen(!open);
  };
  return (
    <div className="select-box">
      <div
        className={`label-box ${open ? "active" : ""}`}
        onClick={openTrigger}
      >
        {value && value.length > 0 ? (
          <span className="value">{value}</span>
        ) : null}
        <span className={`label ${value && value.length > 0 ? "active" : ""}`}>
          {label}
        </span>
        {open ? (
          <i>
            <MdKeyboardArrowUp />
          </i>
        ) : (
          <i>
            <MdKeyboardArrowDown />
          </i>
        )}
      </div>
      {open ? (
        <div className="options">
          {options.map((item) => {
            return (
              <div
                key={item.title}
                className="option"
                onClick={() => {
                  onChange(item.title);
                  setOpen(false);
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default SelectBox;
