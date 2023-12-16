import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import RadioButton from "../elements/radioButton";
import "./style.scss";
import Chart from "./chart";
const View = () => {
  const [activeTab, setActiveTab] = useState("chart");
  const [serachedValue, setSerachedValue] = useState("");
  const [expand, setExpand] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <section className="view">
      <div className="filter">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "grid" ? "active" : ""}`}
            onClick={() => setActiveTab("grid")}
          >
            <span>Grid View</span>
          </div>
          <div
            className={`tab ${activeTab === "map" ? "active" : ""}`}
            onClick={() => setActiveTab("map")}
          >
            <span>Map View</span>
          </div>
          <div
            className={`tab ${activeTab === "chart" ? "active" : ""}`}
            onClick={() => setActiveTab("chart")}
          >
            <span>Chart View</span>
          </div>
        </div>
        <div className="filter-box">
          <div className="input-field">
            <input
              value={serachedValue}
              type="text"
              required={true}
              spellCheck="false"
              onChange={(e) => setSerachedValue(e.target.value)}
            />
            <i>
              <IoMdSearch />
            </i>
          </div>
          <div className="title">
            <div onClick={() => setExpand(!expand)}>
              {expand ? (
                <i>
                  <MdKeyboardArrowUp />
                </i>
              ) : (
                <i>
                  <MdKeyboardArrowDown />
                </i>
              )}
              <div>Hospital</div>
            </div>
            {expand ? (
              <RadioButton
                title=""
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
                onChange={(value) => setSelectedItem(value)}
                value={selectedItem}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="visual">{activeTab === "chart" ? <Chart /> : null}</div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col col-4">
            <div className="tabs">
              <div
                className={`tab ${activeTab === "grid" ? "active" : ""}`}
                onClick={() => setActiveTab("grid")}
              >
                <span>Grid View</span>
              </div>
              <div
                className={`tab ${activeTab === "map" ? "active" : ""}`}
                onClick={() => setActiveTab("map")}
              >
                <span>Map View</span>
              </div>
              <div
                className={`tab ${activeTab === "chart" ? "active" : ""}`}
                onClick={() => setActiveTab("chart")}
              >
                <span>Chart View</span>
              </div>
            </div>
            <div>
              <div className="input-field">
                <input
                  value={""}
                  type="text"
                  required={true}
                  spellCheck="false"
                  // onChange={(e) => onChange(e.target.value)}
                />
                <label></label>
              </div>
            </div>
          </div>
          <div className="col col-8">
            {activeTab === "chart" ? <Chart /> : null}
          </div>
        </div>
      </div> */}
    </section>
  );
};
export default View;
