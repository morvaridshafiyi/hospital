import React, { useEffect, useState } from "react";
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
import { floorsNoSetter } from "../../../redux/slices/forms";
import { Link } from "react-router-dom";

const GeneralInfo = () => {
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
  const [position, setPosition] = useState([32.4279, 53.688]);

  const handleMapClick = (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);
  };
  // initial the dispatch here
  const dispatch = useDispatch();

  useEffect(() => {
    if (florsOn && florsOn.length > 0 && florsUnder && florsUnder.length > 0) {
      dispatch(floorsNoSetter(parseInt(florsOn) + parseInt(florsUnder)));
    }
  }, [florsOn, florsUnder]);
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
                          debugger;
                          setProvince(title);
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
                  </div>
                </div>
              </div>
              <div className="col col-4">
                <MapContainer
                  center={position}
                  zoom={6}
                  style={{ height: "565px", width: "100%" }}
                  onClick={handleMapClick}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      Your selected location: {position[0]}, {position[1]}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
          <div className="col col-12">
            <button className="next">
              <Link to={"/hospital-classification"}>Next</Link>
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
