import React, { Component } from "react";
// import qs from "qs";

export default class Detail extends Component {
  state = {
    DetailData: [
      { id: "01", content: "1111" },
      { id: "02", content: "2222" },
      { id: "03", content: "33333" },
    ],
  };
  render() {
    // 使用params传递参数
    // const { id, title } = this.props.match.params;
    const { DetailData } = this.state;
    // 使用search传递参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1));

    // 使用state传递参数
    const { id, title } = this.props.location.state || {};

    const findResult =
      DetailData.find((item) => {
        return item.id === id;
      }) || {};
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    );
  }
}
