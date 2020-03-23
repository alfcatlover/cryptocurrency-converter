import React from "react";
import { Select } from "antd";

import s from "./style.module.css";

const { Option } = Select;

export const CryptoSelectors = ({
  onChangeFirst,
  onChangeSecond,
  mainReducer,
  firstSelectedCrypto,
  secondSelectedCrypto,
  options
}) => {
  const cryptocurrencyNames = options.map((Name, idx) => (
    <Option key={Name + idx} value={Name}>
      {Name}
    </Option>
  ));

  return (
    <section className={s.selectorsContainer}>
      <Select
        showSearch
        size="large"
        className={s.select}
        onChange={onChangeFirst}
        value={firstSelectedCrypto}
        optionFilterProp="children"
        loading={mainReducer.isFetching}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {!firstSelectedCrypto && <Option disabled>Select a crypto</Option>}
        {cryptocurrencyNames}
      </Select>
      <Select
        showSearch
        size="large"
        className={s.select}
        onChange={onChangeSecond}
        optionFilterProp="children"
        value={secondSelectedCrypto}
        loading={mainReducer.isFetching}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {!secondSelectedCrypto && <Option disabled>Select a crypto</Option>}
        {cryptocurrencyNames}
      </Select>
    </section>
  );
};
