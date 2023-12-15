import "./style.scss";
const Switch = ({isChecked, label, onChange }) => {

  const toggleSwitch = () => {
    const newCheckValue = !isChecked;
    onChange(newCheckValue);
  };
  return (
    <div className="switch-container">
      <div className="switch-box" onClick={toggleSwitch}>
        <input type="checkbox" checked={isChecked} readOnly />
        <div className={`slider ${isChecked ? "on" : "off"}`}></div>
      </div>
      <span className="title">{label}</span>
    </div>
  );
};
export default Switch;
