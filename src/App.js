import React, { Component } from "react";
import { Button } from "antd";
import { ConfigProvider, Space } from "antd";
export default class App extends Component {
  render() {
    return (
      <div>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token，影响范围大
              colorPrimary: "#00b96b",
              borderRadius: 2,

              // 派生变量，影响范围小
              colorBgContainer: "#f6ffed",
            },
          }}
        >
          <Space>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
          </Space>
        </ConfigProvider>
      </div>
    );
  }
}
