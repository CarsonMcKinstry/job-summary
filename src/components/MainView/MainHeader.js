import React, { Component } from "react";
import { PropTypes } from "prop-types";

import MainViewTabs from "./MainViewTabs";

const MainHeader = ({ jobTitle, location, postPreviewLink, status }) => (
  <header className="main-view-header">
    <div className="job-title">
      <h2>{jobTitle}</h2>
      <div className="job-location">
        <i className="material-icons">location_on</i>
        <span>{location}</span>
        &bull;
        <a href={postPreviewLink}>Preview this post</a>
      </div>
    </div>
    <div className="job-post-actions">
      <button type="button" className="action-button with-text">
        <i
          className={`status-indicator ${
            status === "open" ? "open" : "closed"
          }`}
        />
        {status}
      </button>
      <button type="button" className="action-button">
        <i className="material-icons">bookmark</i>
      </button>
      <button type="button" className="action-button">
        <i className="material-icons">mode_edit</i>
      </button>
      <button type="button" className="action-button">
        <i className="material-icons">delete</i>
      </button>
    </div>
  </header>
);

MainHeader.propTypes = {};

export default MainHeader;
