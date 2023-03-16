import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../contexts/UserAuthContext";
const Sidebar = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  // console.log(window.innerWidth)
  return (

    
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        {/* <img src={Logo} alt="logo" /> */}
        <span>
          mAnA<span>gE</span>-iT
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <Link to={item.path}
              className={selected === index ? "menuItem active " : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            
            </Link>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          {/* <p className="mt-3">Logout</p> */}
          <UilSignOutAlt onClick={handleLogout}/>
          {/* <Button variant="primary" >
          Log out
        </Button> */}
        </div>

      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
