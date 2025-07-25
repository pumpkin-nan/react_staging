import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class List extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };
  componentDidMount() {
    this.token = PubSub.subscribe("sendData", (_, stateObj) => {
      this.setState(stateObj);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { isLoading, isFirst, err, userList } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用</h2>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <h2>{err}</h2>
        ) : (
          userList.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="head_portrait"
                    src={userObj.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
