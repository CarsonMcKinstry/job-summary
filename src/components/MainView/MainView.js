import React, { Component } from "react";
import { PropTypes } from "prop-types";
import MainHeader from "./MainHeader";

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
      </article>
    );
  }
}

MainView.propTypes = {};

export default MainView;
