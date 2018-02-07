import React, { Component } from "react";
import { PropTypes } from "prop-types";

import faceOne from "../../images/face-1.jpg";
import Profile from "./Profile";
import NavSection from "./NavSection";

class Sidenav extends Component {
  render() {
    const mainNavList = [
      { name: "home", link: "#", symbol: "home", active: false },
      { name: "jobs", link: "#", symbol: "work", active: false },
      { name: "resumes", link: "#", symbol: "description", active: false },
      { name: "tasks", link: "#", symbol: "event_note", active: false },
      { name: "calender", link: "#", symbol: "event", active: false }
    ];

    const adminNavList = [
      { name: "Users", link: "#", symbol: "people", active: false },
      { name: "Locations", link: "#", symbol: "location_on", active: false },
      { name: "Workflows", link: "#", symbol: "device_hub", active: false },
      { name: "Job Boards", link: "#", symbol: "forum", active: true },
      { name: "Social", link: "#", symbol: "share", active: false }
    ];

    return (
      <aside className="sidenav">
        <Profile src={faceOne} alt="face-one" name="Carson" />
        <NavSection items={mainNavList} sectionHeading="Main" />
        <NavSection items={adminNavList} sectionHeading="Admin" />
      </aside>
    );
  }
}

Sidenav.propTypes = {};

export default Sidenav;
