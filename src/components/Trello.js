import "../styles/App.css";
import React, { Component } from "react";
import Board from "./Trello/Board";
class Home extends Component {
  render() {
    return (
     <>
     <div>
        <h3 className="mt-4">Manage Your Project Progress</h3>
        <Board />
        </div>
        </>
    );
  }
}

export default Home;
