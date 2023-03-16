import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide m-4 pt-4">
      <div className="">
        <CustomerReview/>
        <p className="text-center"><b>Client Review</b></p>
      </div>
      <div>
        <h4>Bug Reports</h4>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
