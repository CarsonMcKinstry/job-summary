import React, { Component } from "react";
import { PropTypes } from "prop-types";

const CopyPaste = ({ icon, primaryText }) => (
  <div className="copy-paste">
    <p className="header">
      <span>
        <i className="material-icons">{icon}</i>
        {primaryText}
      </span>
    </p>
  </div>
);

CopyPaste.propTypes = {};

export default CopyPaste;
