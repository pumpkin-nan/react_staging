import React, { Component } from "react";
import qs from "qs";

export default class Detail extends Component {
  state = {
    DetailData: [
      { id: "01", content: "1111" },
      { id: "02", content: "2222" },
      { id: "03", content: "33333" },
    ],
  };
  render() {
    // const { id, title } = this.props.match.params;
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));
    console.log(id, title);
    const { DetailData } = this.state;
    const findResult = DetailData.find((item) => {
      return item.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    );
  }
}
