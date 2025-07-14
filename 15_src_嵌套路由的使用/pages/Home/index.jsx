import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Message from "./Message";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是home内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink className="list-group-item" to="/home/message">
                Message
              </MyNavLink>
            </li>
            <li>
              <MyNavLink className="list-group-item" to="/home/news">
                News
              </MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/message" component={Message}></Route>
            <Route path="/home/news" component={News}></Route>
            <Redirect to="/home/message"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
