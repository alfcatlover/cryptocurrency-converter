import React, { useEffect, useRef, useState } from "react";
import { Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import { priceFormat } from "../../utils/cryptoTable.utils";

import s from "./style.module.css";

const priceStateToColor = {
  noChange: "inherit",
  up: "green",
  down: "red"
};

export const CryptoPrice = React.memo(({ price }) => {
  const [priceColor, setPriceColor] = useState(priceStateToColor.noChange);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevAmount = usePrevious(price);

  useEffect(() => {
    if (prevAmount > price) {
      setPriceColor(priceStateToColor.down);
    } else if (prevAmount < price) {
      setPriceColor(priceStateToColor.up);
    }
  }, [prevAmount, price]);

  useEffect(() => {
    const id = setInterval(
      () => setPriceColor(priceStateToColor.noChange),
      2000
    );
    return () => {
      clearInterval(id);
    };
  });

  const suffix =
    priceStateToColor.up === priceColor ? (
      <ArrowUpOutlined className={s.arrow} />
    ) : priceStateToColor.down === priceColor ? (
      <ArrowDownOutlined className={s.arrow} />
    ) : (
      <ArrowDownOutlined className={s.arrow} style={{ color: "transparent" }} />
    );

  return (
    <Statistic
      className={s.statistic}
      precision={1}
      suffix={suffix}
      value={priceFormat(price)}
      valueStyle={{
        color: priceColor,
        fontSize: "1rem",
        lineHeight: "1rem",
        maxHeight: "min-content"
      }}
    />
  );
});
