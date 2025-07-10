import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  search = async () => {
    const {
      keywordElement: { value: keyword },
    } = this;
    PubSub.publish("sendData", { isFirst: false, isLoading: true });
    // axios.get(`http://localhost:3000/api1/search/users/?q=${keyword}`).then(
    //   (response) => {
    //     PubSub.publish("sendData", {
    //       isLoading: false,
    //       userList: response.data.items,
    //     });
    //   },
    //   (error) => {
    //     PubSub.publish("sendData", {
    //       isLoading: false,
    //       err: error.message,
    //     });
    //   }
    // );
    try {
      const response = await fetch(
        `http://localhost:3000/api1/search/users/?q=${keyword}`
      );
      const data = await response.json();
      PubSub.publish("sendData", {
        isLoading: false,
        userList: data.items,
      });
    } catch (error) {
      console.log("失败了");
      PubSub.publish("sendData", {
        isLoading: false,
        err: error.message,
      });
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keywordElement = c)}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
