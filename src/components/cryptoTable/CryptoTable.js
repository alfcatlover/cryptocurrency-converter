import React from "react";
import { Table, Layout, Typography, Result } from "antd";

import { CryptoPrice, Chart } from "../";

import s from "./style.module.css";

const { Content } = Layout;

export const CryptoTable = ({
  dataSource,
  onRowClick,
  isFetching,
  isFetchError
}) => {
  const columns = [
    {
      title: "Sybol",
      dataIndex: "FROMSYMBOL",
      key: "FROMSYMBOL",
      render: sym => (
        <Typography key={sym} className={s.symbol}>
          {sym}
        </Typography>
      )
    },
    {
      title: "Price",
      dataIndex: "PRICE",
      key: "PRICE",
      render: price => <CryptoPrice price={price} />
    },

    {
      title: "Median",
      dataIndex: "MEDIAN",
      key: "MEDIAN",
      render: median => (
        <Typography className={s.price}>
          {median ? median.toFixed(3) : "--"}
        </Typography>
      )
    },
    {
      title: "Chart",
      dataIndex: "PRICE",
      key: "PRICE",
      width: "40%",
      render: price => <Chart price={price} />
    }
  ];

  return (
    <Content className={s.tableContainer}>
      <main className={s.center}>
        {isFetchError ? (
          <Result
            status="404"
            title="There are some problems with your operation."
            subTitle="Sorry, the page you visited does not exist."
          />
        ) : (
          <Table
            columns={columns}
            pagination={false}
            rowClassName={s.row}
            loading={isFetching}
            dataSource={dataSource}
            onRow={record => ({
              onClick: () => onRowClick(record)
            })}
          />
        )}
      </main>
    </Content>
  );
};
