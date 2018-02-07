import React, { Component } from "react";
import { PropTypes } from "prop-types";

const NavItem = ({ name, link, symbol, active }) => (
  <a href={link}>
    <li className={`nav-item ${active ? "active" : ""}`}>
      <i className="material-icons">{symbol}</i> {name}
    </li>
  </a>
);

NavItem.propTypes = {};

export default NavItem;
