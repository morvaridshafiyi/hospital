import { useSelector } from "react-redux";
import "./style.scss";
import TextInput from "../../elements/textInput";
import Breadcrumb from "../../breadcrumb";
import RadioButton from "../../elements/radioButton";
import { useState } from "react";
import SelectBox from "../../elements/selectBox";
import Switch from "../../elements/switch";
import { useNavigate } from "react-router-dom";

const HospitalClassification = () => {
  const floors = useSelector((state) => state.todos);
  const navigate = useNavigate();

  const [standard, setStandard] = useState();
  const floorsOn = Array.from({ length: floors.floorsOn }, (value, index) => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-4">
            <TextInput
              label="Floor"
              value={index++}
              required={true}
              onChange={(value) => {}}
            />
          </div>

          <div className="col col-4">
            <TextInput
              label="Floor Height"
              value={""}
              required={true}
              onChange={(value) => {}}
            />
          </div>
          <div className="col col-4">
            <TextInput
              label="Floor Area"
              value={""}
              required={true}
              onChange={(value) => {}}
              type={"number"}
            />
          </div>
        </div>
      </div>
    );
  }).reverse();
  const floorsUnder = Array.from(
    { length: floors.floorsUnder },
    (value, index) => {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col col-4">
              <TextInput
                label="Floor"
                value={-index - 1}
                required={true}
                onChange={(value) => {}}
              />
            </div>
            <div className="col col-4">
              <TextInput
                label="Floor Height"
                value={""}
                required={true}
                onChange={(value) => {}}
              />
            </div>
            <div className="col col-4">
              <TextInput
                label="Floor Area"
                value={""}
                required={true}
                onChange={(value) => {}}
                type={"number"}
              />
            </div>
          </div>
        </div>
      );
    }
  );
  const Next = () => {
    navigate("/components");
  };
  const Back = () => {
    navigate("/");
  };
  return (
    <section className="hospital-classification">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <Breadcrumb activeStep={2} />
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col col-4">
                {floorsOn}
                {floorsUnder}
              </div>
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
                <span className="title">irregularity</span>
                <Switch label="Vertical" />
                <Switch label="Plan" />
                <RadioButton
                  title="Structural Control System"
                  items={[
                    {
                      label: "none",
                      name: "Structural",
                    },
                    {
                      label: "Passive Control",
                      name: "Structural",
                    },
                    {
                      label: "Active Control",
                      name: "Structural",
                    },
                  ]}
                  onChange={(value) => setStandard(value)}
                />
              </div>
              <div className="col col-4">
                <span className="title">Material</span>
                <SelectBox
                  value={""}
                  label="Material"
                  options={[{ title: "option1" }, { title: "option2" }]}
                  onChange={(title) => {}}
                />
                <span className="title">Lateral Load Resistant System</span>
                <SelectBox
                  value={""}
                  label="X Direction"
                  options={[{ title: "option1" }, { title: "option2" }]}
                  onChange={(title) => {}}
                />
                <SelectBox
                  value={""}
                  label="Y Direction"
                  options={[{ title: "option1" }, { title: "option2" }]}
                  onChange={(title) => {}}
                />
              </div>
            </div>
          </div>
          <div className="col col-12">
            <div className="btns">
              <button
                className={`back ${1 === 1 ? "" : "disable"}`}
                onClick={1 === 1 ? Back : null}
              >
                Back
              </button>
              <button
                className={`next ${1 === 1 ? "" : "disable"}`}
                onClick={1 === 1 ? Next : null}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HospitalClassification;
