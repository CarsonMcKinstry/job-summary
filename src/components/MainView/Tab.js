import React, { Component } from "react";
import { PropTypes } from "prop-types";

const Tab = ({ link, primaryText, active }) => (
  <a href={link}>
    <li className={`${active ? "active" : ""}`}>{primaryText}</li>
  </a>
);

Tab.propTypes = {};

export default Tab;
