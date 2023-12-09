import React from "react";
import "./style.scss";
const Breadcrumb = ({ activeStep }) => {
  return (
    <nav aria-label="breadcrumb">
    <ol class="default-breadcrumb">
        <li class="crumb active">
          <div class="link"><a>General Info</a></div>
        </li>
        <li class="crumb">
          <div class="link"><a href="#">Hospital Classification</a></div>
        </li>
        <li class="crumb">
            <div class="link"><a href="#">Add Non Stuructural Components</a></div>
        </li>
    </ol>
</nav>
    // <nav>
    //   <ol className="cd-breadcrumb triangle">
    //     <li className={`${activeStep === 1 ? "current" : ""}`}>
    //       <a href="#0">General Info</a>
    //     </li>
    //     <li className={`${activeStep === 2 ? "current" : ""}`}>
    //       <a href="#0">Hospital Classification</a>
    //     </li>
    //     <li className={`${activeStep === 3 ? "current" : ""}`}>
    //       <a>Add Non Stuructural Components</a>
    //     </li>
    //   </ol>
    // </nav>
  );
};
export default Breadcrumb;
