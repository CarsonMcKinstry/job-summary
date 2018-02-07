import React, { Component } from "react";
import { PropTypes } from "prop-types";

import HeaderButton from "./HeaderButton";

const Header = () => (
  <header className="header">
    <div className="header-left">
      <HeaderButton icon="keyboard_arrow_left" />
    </div>
    <div className="header-right">
      <HeaderButton icon="person_add" />
      <HeaderButton icon="today" />
      <HeaderButton icon="apps" />
    </div>
  </header>
);

Header.propTypes = {};

export default Header;
