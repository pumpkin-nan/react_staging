import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { isLoading, isFirst, err, userList } = this.props;
    console.log(this.props, ";");
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
