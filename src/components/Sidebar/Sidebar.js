import React, { useState } from "react";
import plusIcon from "../../assets/plus.png";

import "./Sidebar.css";

function Sidebar(props) {
  const colors = [ "#fec971", "#FFBD97","#D8D6D4","#D4FFCA","#00d4fe", "#b693fd", "#FFAEAE","#C7FFFC"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="notesidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`notesidebar_list ${listOpen ? "notesidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="notesidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
