import React, { Component } from "react";
import { PropTypes } from "prop-types";
import MainHeader from "./MainHeader";
import MainViewTabs from "./MainViewTabs";
import Stats from "./Stats";

const tabs = [
  { link: "#", primaryText: "Summary", active: true },
  { link: "#", primaryText: "Applicants", active: false },
  { link: "#", primaryText: "Job Board", active: false },
  { link: "#", primaryText: "Interviews", active: false },
  { link: "#", primaryText: "Activity", active: false },
  { link: "#", primaryText: "Broadcast", active: false },
  { link: "#", primaryText: "Notifications", active: false }
];

class MainView extends Component {
  render() {
    return (
      <article className="main-view">
        <MainHeader
          jobTitle="Customer Service Representative"
          location="Oklahoma City, OK"
          postPreviewLink="#"
          status="open"
        />
        <MainViewTabs tabs={tabs} />
        <section className="main-view-content">
          <Stats />
          <div className="info">
            <div className="meta-info" />
            <div className="social-share" />
          </div>
        </section>
      </article>
    );
  }
}

MainView.propTypes = {};

export default MainView;
