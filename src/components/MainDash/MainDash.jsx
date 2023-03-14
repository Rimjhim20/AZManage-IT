import React from "react";
import Cards from "../Cards/Cards";
import RightSide from "../RigtSide/RightSide";
import Table from "../Table/Table";
import "./MainDash.css";
import '../../App.css'
const MainDash = () => {
  return (
    <>
 {/* <div className="AppGlass"></div> */}
    <div className="MainDash">
      <h3>Let's Monitor</h3>
      <Cards />
      <Table />

    </div>
    <RightSide/>
    </>
  );
};

export default MainDash;
