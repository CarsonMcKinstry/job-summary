import React from "react";
import { PropTypes } from "prop-types";

const HeaderButton = ({ icon, ...rest }) => (
  <div className="header-button">
    <i className="material-icons">{icon}</i>
  </div>
);

export default HeaderButton;
