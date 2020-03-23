import React from "react";
import { Layout } from "antd";

import s from "./style.module.css";

const { Content } = Layout;

export const TransformContainer = ({ children }) => {
  return (
    <Content className={s.transformContainer}>
      <main className={s.center}>{children}</main>
    </Content>
  );
};
