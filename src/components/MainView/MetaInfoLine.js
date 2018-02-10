import React, { Component } from "react";
import { PropTypes } from "prop-types";

const MetaInfoLine = ({ property, description, image }) => (
  <div className="meta-info-line">
    <div className="property">{property}</div>
    <div className="description">{description}</div>
  </div>
);

MetaInfoLine.propTypes = {};

export default MetaInfoLine;
