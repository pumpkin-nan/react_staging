import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };
  handleChange = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  handleCheck = (id) => {
    return (event) => {
      console.log(event.target.checked, id);
    };
  };
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleChange(true)}
        onMouseLeave={this.handleChange(false)}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
