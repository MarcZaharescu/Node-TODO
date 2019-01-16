import React from "react";
import PropTypes from "prop-types";
import Header from "../header";
import Form from "../form";

export class App extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="main-container">
        <Header length="5"/>
        <Form />
      </div>
    );
  }
}

export default App;
