import React from "react";
import Cards from "../Cards/Cards";
import RightSide from "../RigtSide/RightSide";
import Table from "../Table/Table";
import "./MainDash.css";
import { useUserAuth } from "../../contexts/UserAuthContext";
import '../../App.css'
const MainDash = ( ) => {
  const { user } = useUserAuth();

  return (
    <>
 {/* <div className="AppGlass"></div> */}
    <div className="MainDash">
    <div className=" text-center">
     <h4><b>Welcome {user && user.email}</b> </h4>
      </div>
      <h3>Let's Monitor</h3>
      <Cards />
      <Table />

    </div>
    <RightSide/>
    </>
  );
};

export default MainDash;
