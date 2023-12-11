import "./style.scss";
const Switch = ({label}) => {
  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" /> <div></div>
      </label>
      <span className="title">{label}</span>
    </div>
  );
};
export default Switch;
