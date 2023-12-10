import { useSelector } from "react-redux";
import "./style.scss";
import TextInput from "../../elements/textInput";
import Breadcrumb from "../../breadcrumb";
import RadioButton from "../../elements/radioButton";
import { useState } from "react";

const HospitalClassification = () => {
  const floorNo = useSelector((state) => state.todos.floorsNo);
  const [standard, setStandard] = useState();
  const loopArray = Array.from({ length: 3 }, (value, index) => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-4">
            <TextInput
              value={"jg"}
              label="Impact Factor"
              required={true}
              onChange={(value) => {}}
            />
          </div>
          <div className="col col-4">
            <TextInput
              value={"kjh"}
              label="Impact Factor"
              required={true}
              onChange={(value) => {}}
            />
          </div>
          <div className="col col-4">
            <TextInput
              value={"jjhg"}
              label="Impact Factor"
              required={true}
              onChange={(value) => {}}
            />
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="hospital-classification">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <Breadcrumb activeStep={2} />
          </div>
          <div className="col col-4">{loopArray}</div>
          <div className="col col-4">
            <RadioButton
              title="Standard 2800 Edition"
              items={[
                {
                  label: "V1",
                  name: "standard",
                },
                {
                  label: "V2",
                  name: "standard",
                },
                {
                  label: "V3",
                  name: "standard",
                },
                {
                  label: "V4",
                  name: "standard",
                },
              ]}
              onChange={(value) => setStandard(value)}
            />
          </div>
          <div className="col col-4"></div>
        </div>
      </div>
    </section>
  );
};
export default HospitalClassification;
