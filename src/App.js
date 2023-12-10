import React from "react";
import "./assets/styles/layout.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import GeneralInfo from "./components/forms/general-info";
import HospitalClassification from "./components/forms/hospital-classification";

function App() {
  return (
    <Routes>
      {/* <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route> */}
      <Route path="/" element={<GeneralInfo />} />
      <Route
        path="/hospital-classification"
        element={<HospitalClassification />}
      />
    </Routes>
  );
}

export default App;
