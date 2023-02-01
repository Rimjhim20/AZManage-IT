import "../styles/App.css";
import React, { Component } from "react";
import Board from "./Trello/Board";
class Home extends Component {
  render() {
    return (
      <div className="App">
        <h2 >Manage Your Project Progress</h2>
        <Board />
      </div>
    );
  }
}

export default Home;
