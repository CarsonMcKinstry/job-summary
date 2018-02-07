import React, { Component } from "react";
import "./App.scss";

import Sidenav from "./Sidenav/Sidenav";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Header />
      </div>
    );
  }
}

export default App;
