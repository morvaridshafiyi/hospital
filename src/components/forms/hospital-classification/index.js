import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import TextInput from "../../elements/textInput";
import Breadcrumb from "../../breadcrumb";
import RadioButton from "../../elements/radioButton";
import { useState } from "react";
import {form} from '../../../redux/slices/forms'
import SelectBox from "../../elements/selectBox";
import Switch from "../../elements/switch";
import { useNavigate } from "react-router-dom";

const HospitalClassification = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.todos);
  const navigate = useNavigate()

  const formHandler = (key, value) => {
    dispatch(form({ key, value }));
  };
  const floorsOn = Array.from({ length: formData.floorsOn }, (value, index) => {

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
    { length: formData.floorsUnder },
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
                  onChange={(value) => formHandler("standardEdition", value)}
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
                    {
                      label: "Semi Active",
                      name: "Structural",
                    },
                  ]}
                  onChange={(value) => formHandler("controlSystem", value)}
                />
              </div>
              <div className="col col-4">
                <span className="title">Material</span>
                <SelectBox
                  value={formData.irregularityVertical}
                  label="Material"
                  options={[
                    { title: "Reinforced Concrete" },
                    { title: "Steel" },
                    { title: "Masonry" },
                  ]}
                  onChange={(title) =>
                    formHandler("irregularityVertical", title)
                  }
                />
                <span className="title">Lateral Load Resistant System</span>
                <SelectBox
                  value={formData.lateralLoadResistantX}
                  label="X Direction"
                  options={[
                    { title: "Momemt Frames" },
                    { title: "Shear Walls" },
                    { title: "Braced Frames" },
                    { title: "Combinations" },
                  ]}
                  onChange={(title) =>
                    formHandler("lateralLoadResistantX", title)
                  }
                />
                <SelectBox
                  value={formData.lateralLoadResistantY}
                  label="Y Direction"
                  options={[{ title: "option1" }, { title: "option2" }]}
                  onChange={(title) =>
                    formHandler("lateralLoadResistantY", title)
                  }
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
