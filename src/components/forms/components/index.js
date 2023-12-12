import { useEffect, useState } from "react";
import SelectBox from "../../elements/selectBox";
import TextInput from "../../elements/textInput";
import "./style.scss";
import { IoTrashBinOutline } from "react-icons/io5";

const Components = () => {
  const [floorNo, setFloorNo] = useState();
  const [count, setCount] = useState();
  const [components, setComponents] = useState();
  const [cost, setCost] = useState();
  const [isEmbraced, setIsEmbraced] = useState();
  const [serviceYears, setServiceYears] = useState();
  const [componentsList, setComponentsList] = useState([]);

  const emptyAllState = () => {
    setFloorNo("");
    setCount("");
    setComponents("");
    setCost("");
    setIsEmbraced("");
    setServiceYears("");
  };
  const saveComponent = () => {
    const item = {
      floorNo: floorNo,
      count: count,
      components: components,
      cost: cost,
      isEmbraced: isEmbraced,
      serviceYears: serviceYears,
    };
    setComponentsList([...componentsList, item]);
    emptyAllState()
  };

  const removeComponent = (index) => {
    const updatedItems = [...componentsList];
    updatedItems.splice(index, 1);
    setComponentsList(updatedItems);
  };

  return (
    <section className="components">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <span className="title">add component</span>
            <TextInput
              value={floorNo}
              label="Floor Number"
              required={true}
              onChange={(value) => {
                setFloorNo(value);
              }}
              type={"number"}
            />
            <TextInput
              value={count}
              label="Count"
              required={true}
              onChange={(value) => {
                setCount(value);
              }}
              type={"number"}
            />
            <SelectBox
              value={components}
              label="Components"
              options={[{ title: "option1" }, { title: "option2" }]}
              onChange={(title) => {
                setComponents(title);
              }}
            />
            <TextInput
              value={cost}
              label="Cost"
              required={true}
              onChange={(value) => {
                setCost(value);
              }}
              type={"number"}
            />
            <SelectBox
              value={isEmbraced}
              label="Is Embraced"
              options={[{ title: "option1" }, { title: "option2" }]}
              onChange={(title) => {
                setIsEmbraced(title);
              }}
            />
            <TextInput
              value={serviceYears}
              label="Sevice Years"
              required={true}
              onChange={(value) => {
                setServiceYears(value);
              }}
              type={"number"}
            />
            <div className="btns">
              <button
                className={`back ${1 === 1 ? "" : "disable"}`}
                onClick={emptyAllState}
              >
                Cancel
              </button>
              <button
                className={`next ${1 === 1 ? "" : "disable"}`}
                onClick={1 === 1 ? saveComponent : null}
              >
                Save
              </button>
            </div>
          </div>
          <div className="col col-6">
            {componentsList.map((item) => {
              return (
                <div className="item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col col-6">
                        <div className="item-row">
                          <span className="label">Floor Number:</span>{" "}
                          <span className="value">{item.floorNo}</span>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="item-row">
                          <span className="label">Count:</span>{" "}
                          <span className="value">{item.count}</span>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="item-row">
                          <span className="label">Coponent:</span>{" "}
                          <span className="value">{item.components}</span>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="item-row">
                          <span className="label">Cost:</span>{" "}
                          <span className="value">{item.cost}</span>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="item-row">
                          <span className="label">isEmbraced:</span>{" "}
                          <span className="value">{item.isEmbraced}</span>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="item-row">
                          <span className="label">service Years:</span>{" "}
                          <span className="value">{item.serviceYears}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <i
                    onClick={() =>
                      removeComponent(componentsList.indexOf(item))
                    }
                  >
                    <IoTrashBinOutline />
                  </i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Components;
