import React from "react";
import PropTypes from "prop-types";

export class Form extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      itemList: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState({ itemList: this.state.itemList.concat(newItem) });

      this._inputElement.value = "";
    }

    e.preventDefault();
  }

  deleteItem(e, index) {
    this.state.itemList.splice(index, 1);
    this.setState({ itemList: this.state.itemList });
  }

  deleteAll(e) {
    this.setState({ itemList: [] });
  }

  render() {
    return (
      <div id="todo-form" className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <form onSubmit={this.addItem}>
            <div className="form-group">
              <input
                type="text"
                className="form-control input-lg text-center"
                placeholder="Add text here"
                ng-model="formData.text"
                ref={event => (this._inputElement = event)}
              />
              <ul>
                {this.state.itemList.map((item, index) => (
                  <li
                    type="text"
                    className="form-control input-lg text-center"
                    placeholder="Add text here"
                    ng-model="formData.text"
                  >
                    <span className="label label-info">{index}</span>

                    {item.text}

                    <button
                      onClick={e => this.deleteItem(e, index)}
                      className="label label-info"
                    >
                      {"x"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="submit"
              className="btn btn-primary btn-lg"
              type="submit"
            >
              {"Add"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
