import "../styles/App.css";
import React, { Component } from "react";
import Board from "./Trello/Board";
class Home extends Component {
  render() {
    return (
     <>
     <div>
        <h3 className="text-center">Manage Project Progress</h3>
        <Board />
        </div>
        </>
    );
  }
}

export default Home;
