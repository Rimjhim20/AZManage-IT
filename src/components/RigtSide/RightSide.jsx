import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
   
      <div>
        <h4>Client Review</h4>
        <CustomerReview />
      </div>
      <div>
        <h3>Bug Reports</h3>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
