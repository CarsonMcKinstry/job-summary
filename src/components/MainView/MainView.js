import React, { Component } from "react";
import { PropTypes } from "prop-types";
import MainHeader from "./MainHeader";
import MainViewTabs from "./MainViewTabs";
import Stats from "./Stats";
import MetaInfo from "./MetaInfo";
import Social from "./Social";

const tabs = [
  { link: "#", primaryText: "Summary", active: true },
  { link: "#", primaryText: "Applicants", active: false },
  { link: "#", primaryText: "Job Board", active: false },
  { link: "#", primaryText: "Interviews", active: false },
  { link: "#", primaryText: "Activity", active: false },
  { link: "#", primaryText: "Broadcast", active: false },
  { link: "#", primaryText: "Notifications", active: false }
];

const positionMetaInfo = [
  {
    property: "Position Title",
    description: "Customer Service Representative"
  },
  { property: "Location", description: "Oklahoma City, OK" },
  { property: "Employment Type", description: "Full-time" },
  { property: "Experience", description: "Mid-level" },
  { property: "Status", description: "Open" },
  {
    property: "Description",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quae perspiciatis magnam magni minus blanditiis illo repellendus officiis voluptatibus accusamus quos dolor quidem dolorum veritatis a non quaerat corrupti modi."
  },
  {
    property: "Hiring Lead",
    description: "Another Dude"
  },
  {
    property: "Approved Salary",
    description: "$58,000"
  }
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
          <div className="main-view-separator">
            <span className="horizontal-rule" />
            <span className="expand-button">
              <i className="material-icons">keyboard_arrow_up</i>
            </span>
            <span className="horizontal-rule" />
          </div>
          <div className="info">
            <MetaInfo positionMetaInfo={positionMetaInfo} />
            <Social />
          </div>
        </section>
      </article>
    );
  }
}

MainView.propTypes = {};

export default MainView;
