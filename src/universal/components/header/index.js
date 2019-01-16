import React from "react";
import PropTypes from "prop-types";

export class Header extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    const {length} = this.props;
    return (
      <div className="jumbotron text-center">
        <h1>{"My todo list"}</h1>
        <span className="label label-info">{length}</span>
      </div>
    );
  }
}

Header.propTypes = {
  length: PropTypes.string.isRequired
};

export default Header;
