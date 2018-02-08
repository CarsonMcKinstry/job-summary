import React, { Component } from "react";
import "./App.scss";

import Sidenav from "./Sidenav/Sidenav";
import Header from "./Header/Header";
import MainView from "./MainView/MainView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <section>
          <Header />
          <MainView />
        </section>
      </div>
    );
  }
}

export default App;
