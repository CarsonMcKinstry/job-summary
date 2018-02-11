import React, { Component } from "react";
import { PropTypes } from "prop-types";

const CopyPaste = ({ icon, primaryText, secondaryText, copyAble }) => (
  <div className="copy-paste">
    <h3 className="copy-paste-header">
      <i className="material-icons">{icon}</i>
      {primaryText}
    </h3>
    <p className="copy-paste-body">{secondaryText}</p>
    <div class="copy-button">
      <input type="text" value={copyAble} />
      <button type="button">
        Copy
      </button>
    </div>
  </div>
);

CopyPaste.propTypes = {};

export default CopyPaste;
