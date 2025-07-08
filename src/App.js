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
  updateTodo = (id, done) => {
    const { todoList } = this.state;
    const newTodos = todoList.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return { ...todoObj };
    });
    this.setState({ todoList: newTodos });
  };
  deleteTodo = (id) => {
    console.log(id, "app");
    const { todoList } = this.state;
    const newTodos = todoList.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todoList: newTodos });
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todoList}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
