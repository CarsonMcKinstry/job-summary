import React, { Component } from "react";
import { PropTypes } from "prop-types";

const Social = () => (
  <div className="social-share">
    <div className="social-button facebook">Post to Facebook</div>
    <div className="social-button twitter">Tweet this Job</div>
    <div className="social-button linked-in">Post to LinkedIn</div>
  </div>
);

Social.propTypes = {};

export default Social;
