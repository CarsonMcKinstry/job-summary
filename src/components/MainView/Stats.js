import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Stats extends Component {
  render() {
    return (
      <div className="stats">
        <div className="stat-view circle-graphs">
          <div className="stat" />
          <footer>
            <span className="stat-footer">
              <span>Totals</span> &bull; Out of 5,231 views
            </span>
          </footer>
        </div>
        <div className="stat-view bar-graphs">
          <div className="stat" />
          <footer>
            <span className="stat-footer">
              <span>applicants/day</span>
            </span>
          </footer>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {};

export default Stats;
