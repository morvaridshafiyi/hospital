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
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GeneralInfo />} />
        <Route
          path="/hospital-classification"
          element={<HospitalClassification />}
        />
      </Routes>
    </>
  );
}

export default App;
