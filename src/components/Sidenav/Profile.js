import React, { Component } from "react";
import { PropTypes } from "prop-types";

const Profile = ({ ...rest, name }) => (
  <div className="profile-container sidenav-section">
    <img {...rest} />
    <p>{name}<i className="material-icons">arrow_drop_down</i></p>
  </div>
);

Profile.propTypes = {};

export default Profile;
