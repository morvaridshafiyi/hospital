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
import Components from "./components/forms/components";
import View from "./components/view";

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
        <Route path="/components" element={<Components />} />
        <Route path="/view" element={<View />} />

      </Routes>
    </>
  );
}

export default App;
