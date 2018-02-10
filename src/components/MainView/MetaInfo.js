import React, { Component } from "react";
import { PropTypes } from "prop-types";

import MetaInfoLine from "./MetaInfoLine";

const MetaInfo = ({ positionMetaInfo }) => (
  <section className="meta-info">
    <header className="meta-info-header">
      <h4>Job Description</h4>
      <button className="edit-button">
        <i className="material-icons">edit</i>
        edit
      </button>
    </header>
    <div className="meta-info-content">
      {positionMetaInfo.map(info => <MetaInfoLine {...info} />)}
    </div>
  </section>
);

MetaInfo.propTypes = {};

export default MetaInfo;
