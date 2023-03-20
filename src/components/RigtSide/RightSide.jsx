import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide m-4 pt-4">
      <div>
      <div className="d-flex">
        <h4 className="m-2">Report Bugs</h4>
        <button className="primary reportbtn">report</button>
        </div>
        <Updates />
      </div>
      <div className="">
        <CustomerReview/>
        <h6 className="text-center"><b>Client Review</b></h6>
      </div>
    </div>
  );
};

export default RightSide;
