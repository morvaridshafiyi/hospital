import { useState } from "react";
import "./style.scss";
import Chart from "./chart";
const View = () => {
  const [activeTab, setActiveTab] = useState("chart");
  return (
    <section className="view">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-4">
             <div className="tabs">
              <div className={`tab ${activeTab==='grid' ?'active' :''}`} onClick={()=>setActiveTab("grid")}>
                <span>Grid View</span>
              </div>
              <div className={`tab ${activeTab==='map' ?'active' :''}`} onClick={()=>setActiveTab("map")}>
                <span>Map View</span>
              </div>
              <div className={`tab ${activeTab==='chart' ?'active' :''}`} onClick={()=>setActiveTab("chart")}>
                <span>Chart View</span>
              </div>
             </div>
          </div>
          <div className="col col-8">
            {
              activeTab==='chart'
              ?<Chart/>
              :null
            }
          </div>
        </div>
      </div>
    </section>
  );
};
export default View;
