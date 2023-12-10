import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../../redux/slices/forms";
import Breadcrumb from "../../breadcrumb";
import SelectBox from "../../elements/selectBox";
import TextInput from "../../elements/textInput";
import MiladiDatePicker from "../../elements/datePicker";
import TextArea from "../../elements/textArea";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { floorsNoSetter, form } from "../../../redux/slices/forms";
import { Link, useNavigate } from "react-router-dom";
import { cities, states } from "../../elements/cityPicker";

const GeneralInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.todos);
  const [allowContinue, setAllowContinue] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);
  const mapRef = useRef(null);

  const formHandler = (key, value) => {
    dispatch(form({ key, value }));
  };
  const handleMapClick = (e) => {
    formHandler("latidude", e.latlng.lat);
    formHandler("longitude", e.latlng.lng);
  };
  useEffect(() => {
    if (
      formData.floorsOn &&
      formData.floorsOn.length > 0 &&
      formData.floorsUnder &&
      formData.floorsUnder.length > 0
    ) {
      dispatch(
        floorsNoSetter(
          parseInt(formData.floorsOn) + parseInt(formData.floorsUnder)
        )
      );
    }
  }, [formData.florsOn, formData.florsUnder]);

  useEffect(() => {
    setCityOptions(cities[formData.province] || []);
  }, [formData.province]);

  useEffect(() => {
    if (
      formData.address &&
      formData.bedsNumber &&
      formData.city &&
      formData.createdDate &&
      formData.designedDate &&
      formData.floorsOn &&
      formData.floorsUnder &&
      formData.hospitalName &&
      formData.impactFactor &&
      formData.latitude &&
      formData.longitude &&
      formData.province &&
      formData.serviceDate &&
      formData.soilType &&
      formData.unitPrice
    ) {
      setAllowContinue(true);
    } else {
      setAllowContinue(false);
    }
  }, [formData]);

  const Next = () => {
    navigate("/hospital-classification");
  };
  return (
    <section className="general-info">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <Breadcrumb activeStep={1} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-8">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col col-12">
                      <TextInput
                        value={formData.hospitalName}
                        label={"Hospital Name"}
                        required={true}
                        onChange={(value) => formHandler("hospitalName", value)}
                      />
                    </div>
                    <div className="col col-6">
                      <SelectBox
                        value={formData.province}
                        label="Province"
                        options={states}
                        onChange={(title) => {
                          debugger;
                          formHandler("province", title);
                        }}
                      />
                    </div>
                    <div className="col col-6">
                      <SelectBox
                        value={formData.city}
                        label="City"
                        options={cityOptions}
                        onChange={(value) => {
                          formHandler("city", value);
                        }}
                      />
                    </div>
                    <div className="col col-4">
                      {" "}
                      <MiladiDatePicker
                        label="Designed Date"
                        value={formData.designedDate}
                        onChange={(date) => formHandler("designedDate", date)}
                      />
                    </div>
                    <div className="col col-4">
                      <MiladiDatePicker
                        label="Created Date"
                        value={formData.createdDate}
                        onChange={(date) => formHandler("createdDate", date)}
                      />
                    </div>
                    <div className="col col-4">
                      <MiladiDatePicker
                        label="Service Date"
                        value={formData.serviceDate}
                        onChange={(date) => formHandler("serviceDate", date)}
                      />
                    </div>
                    <div className="col col-6">
                      <TextInput
                        value={formData.floorsOn}
                        label="Floors On"
                        required={true}
                        onChange={(value) => {
                          formHandler("floorsOn", value);
                        }}
                      />
                    </div>
                    <div className="col col-6">
                      <TextInput
                        value={formData.floorsUnder}
                        label="Floors Under"
                        required={true}
                        onChange={(value) => {
                          formHandler("floorsUnder", value);
                        }}
                      />
                    </div>

                    <div className="col col-12">
                      <TextArea
                        label="Address"
                        value={formData.address}
                        onChange={(value) => formHandler("address", value)}
                        required={true}
                        cols={5}
                      />
                    </div>
                    <div className="col col-6">
                      <TextInput
                        value={formData.latitude}
                        label="Latitude"
                        required={true}
                        onChange={(value) => {
                          formHandler("latitude", value);
                        }}
                      />
                    </div>
                    <div className="col col-6">
                      <TextInput
                        value={formData.longitude}
                        label="Longitude"
                        required={true}
                        onChange={(value) => {
                          formHandler("longitude", value);
                        }}
                      />
                    </div>
                    <div className="col col-4">
                      <TextInput
                        value={formData.bedsNumber}
                        label="Beds Number"
                        required={true}
                        onChange={(value) => {
                          formHandler("bedsNumber", value);
                        }}
                      />
                    </div>
                    <div className="col col-4">
                      <TextInput
                        value={formData.impactFactor}
                        label="Impact Factor"
                        required={true}
                        onChange={(value) => {
                          formHandler("impactFactor", value);
                        }}
                      />
                    </div>
                    <div className="col col-4">
                      <TextInput
                        value={formData.unitPrice}
                        label="Unit Price"
                        required={true}
                        onChange={(value) => {
                          formHandler("unitPrice", value);
                        }}
                      />
                    </div>
                    <div className="col col-12">
                      <SelectBox
                        value={formData.soilType}
                        label="Soil Type"
                        options={[{ title: "option1" }, { title: "option2" }]}
                        onChange={(title) => {
                          formHandler("soilType", title);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-4">
                <MapContainer
                  center={[formData.latitude, formData.longitude]}
                  zoom={11}
                  style={{ height: "565px", width: "100%" }}
                  onClick={handleMapClick}
                  ref={mapRef}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[formData.latitude, formData.longitude]}
                  ></Marker>
                </MapContainer>
              </div>
            </div>
          </div>
          <div className="col col-12">
            <button
              className={`next ${allowContinue ? "" : "disable"}`}
              onClick={allowContinue ? Next : null}
            >
              Next
            </button>
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
