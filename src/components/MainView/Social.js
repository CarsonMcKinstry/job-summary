import React, { Component } from "react";
import { PropTypes } from "prop-types";

import CopyPaste from "./CopyPaste";

const Social = () => (
  <div className="social-share">
    <div className="social-button facebook">Post to Facebook</div>
    <div className="social-button twitter">Tweet this Job</div>
    <div className="social-button linked-in">Post to LinkedIn</div>
    <CopyPaste
      icon="language"
      primaryText="Link to this Job"
      secondaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec condimentum ex, dignissim tempor nisi."
      copyAble="I'm a copyable thing that will go in an input"
    />
    <CopyPaste
      icon="web"
      primaryText="Use the Button Widget"
      secondaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec condimentum ex, dignissim tempor nisi."
      copyAble="I'm a copyable thing that will go in an input"
    />
    <CopyPaste
      icon="send"
      primaryText="Upload Resumes by Email"
      secondaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec condimentum ex, dignissim tempor nisi."
      copyAble="I'm a copyable thing that will go in an input"
    />
  </div>
);

Social.propTypes = {};

export default Social;
