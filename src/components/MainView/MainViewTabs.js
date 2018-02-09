import React, { Component } from "react";
import { PropTypes } from "prop-types";

import Tab from "./Tab";

const MainViewTabs = ({ tabs }) => (
  <nav className="main-view-tabs">
    <ul>{tabs.map(tab => <Tab key={tab.primaryText} {...tab} />)}</ul>
  </nav>
);

MainViewTabs.propTypes = {};

export default MainViewTabs;
