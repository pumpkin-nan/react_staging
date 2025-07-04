import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";
export default class App extends Component {
  state = {
    todoList: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "喝奶茶", done: false },
    ],
  };
  addTodo = (data) => {
    const { todoList } = this.state;
    const newTodo = [data, ...todoList];
    console.log(newTodo);
    this.setState({ todoList: newTodo });
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todoList} />
          <Footer />
        </div>
      </div>
    );
  }
}
