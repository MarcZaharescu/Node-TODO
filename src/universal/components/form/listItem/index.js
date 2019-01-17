import React from "react";
import PropTypes from "prop-types";

export class ListItem extends React.Component {
  render() {
    const { text, index, deleteItem } = this.props;
    return (
      <li
        type="text"
        className="form-control input-lg text-center"
        placeholder="Add text here"
        ng-model="formData.text"
      >
        <span className="label label-info">{index}</span>

        {text}

        <button
          onClick={e => deleteItem(e, index)}
          className="label label-info"
        >
          {"x"}
        </button>
      </li>
    );
  }
}

export default ListItem;
