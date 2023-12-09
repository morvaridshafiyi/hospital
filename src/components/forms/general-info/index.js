import React, { useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../../redux/slices/forms";
import Breadcrumb from "../../breadcrumb";
import SelectBox from "../../elements/selectBox";
import TextInput from "../../elements/textInput";
import MiladiDatePicker from "../../elements/datePicker";
import TextArea from "../../elements/textArea";

const GeneralInfo = () => {
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [designedDate, setDesignedDate] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [serviceDate, setServiceDate] = useState();
  const [florsOn, setFlorsOn] = useState("");
  const [florsUnder, setFlorsUnder] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [bedsNumber, setBedsNumber] = useState("");
  const [impactFactor, setImpactFactor] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [soilType, setSoilType] = useState("");

  // initial the dispatch here
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <section className="general-info">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <Breadcrumb activeStep={1} />
          </div>
          <div className="col col-6">
            <TextInput
              value={hospitalName}
              label={"Hospital Name"}
              required={true}
              onChange={(value) => {
                setHospitalName(value);
              }}
            />
            <SelectBox
              value={city}
              label="City"
              options={[{ title: "option1" }, { title: "option2" }]}
              onChange={(title) => {
                setCity(title);
              }}
            />
            <TextInput
              value={florsOn}
              label="Flors On"
              required={true}
              onChange={(value) => {
                setFlorsOn(value);
              }}
            />

            <MiladiDatePicker
              label="Designed Date"
              value={designedDate}
              onChange={(date) => setDesignedDate(date)}
            />
            <TextInput
              value={lat}
              label="Latitude"
              required={true}
              onChange={(value) => {
                setLat(value);
              }}
            />
            <TextInput
              value={bedsNumber}
              label="Beds Number"
              required={true}
              onChange={(value) => {
                setBedsNumber(value);
              }}
            />
            <TextInput
              value={unitPrice}
              label="Unit Price"
              required={true}
              onChange={(value) => {
                setUnitPrice(value);
              }}
            />
            <SelectBox
              value={soilType}
              label="Soil Type"
              options={[{ title: "option1" }, { title: "option2" }]}
              onChange={(title) => {
                setSoilType(title);
              }}
            />
          </div>
          <div className="col col-6">
            <SelectBox
              value={province}
              label="Province"
              options={[{ title: "option1" }, { title: "option2" }]}
              onChange={(title) => {
                debugger
                setProvince(title)
              }}
            />

            <TextInput
              value={florsUnder}
              label="Flors Under"
              required={true}
              onChange={(value) => {
                setFlorsUnder(value);
              }}
            />
            <MiladiDatePicker
              label="Created Date"
              value={createdDate}
              onChange={(date) => setCreatedDate(date)}
            />
            <MiladiDatePicker
              label="Service Date"
              value={serviceDate}
              onChange={(date) => setServiceDate(date)}
            />

            <TextInput
              value={lng}
              label="Longitude"
              required={true}
              onChange={(value) => {
                setLng(value);
              }}
            />
            <TextInput
              value={impactFactor}
              label="Impact Factor"
              required={true}
              onChange={(value) => {
                setImpactFactor(value);
              }}
            />
            <TextArea
              label="Address"
              value={address}
              onChange={(value) => setAddress(value)}
              required={true}
              cols={5}
            />
          </div>
          <div className="col col-12">
            <button className="next">Next</button>
          </div>
        </div>
      </div>
      {/* <div>
        <form onSubmit={addTodoHandler}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Add todo</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
};
export default GeneralInfo;
