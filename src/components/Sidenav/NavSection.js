import React, { Component } from "react";
import { PropTypes } from "prop-types";

import NavItem from "./NavItem";

const NavSection = ({ items, sectionHeading }) => (
  <div className="sidenav-section nav-section">
    <h4>{sectionHeading}</h4>
    <ul>{items.map(item => <NavItem {...item} key={item.name} />)}</ul>
  </div>
);

NavSection.propTypes = {};

export default NavSection;
