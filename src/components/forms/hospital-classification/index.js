import { useSelector } from "react-redux";
import "./style.scss";
import TextInput from "../../elements/textInput";
const HospitalClassification = () => {
  const floorNo = useSelector((state) => state.todos.floorsNo);
  const loopArray = Array.from({ length: floorNo }, (value, index) => {
    return (
      <div className="hospital-row">
        <TextInput
          value={"jg"}
          label="Impact Factor"
          required={true}
          onChange={(value) => {}}
        />
        <TextInput
          value={"kjh"}
          label="Impact Factor"
          required={true}
          onChange={(value) => {}}
        />
        <TextInput
          value={"jjhg"}
          label="Impact Factor"
          required={true}
          onChange={(value) => {}}
        />
      </div>
    );
  });
  return (
    <section className="hospital-classification">
      <div className="container">
        <div className="row">
          <div className="col col-6">{loopArray}</div>
          <div className="col col-6"></div>
        </div>
      </div>
    </section>
  );
};
export default HospitalClassification;
