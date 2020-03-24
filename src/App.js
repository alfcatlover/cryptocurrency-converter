import React from "react";
import { Layout, Typography } from "antd";
import "antd/dist/antd.css";

import { Selectors, Table, MultiPrice } from "./features";

import { TransformContainer } from "./components";
import "./App.css";

const { Content, Header } = Layout;
const { Text } = Typography;

function App() {
  return (
    <Layout
      style={{
        backgroundColor: "white"
      }}
    >
      <Header style={{ backgroundColor: "#FFEB3B", color: "#ffeb3b" }}>
        <Text style={{ fontSize: "2em" }}>Cryptocurrency Converter</Text>
      </Header>
      <TransformContainer>
        <Selectors />
        <MultiPrice />
      </TransformContainer>
      <Content>
        <Table />
      </Content>
    </Layout>
  );
}

export default App;
