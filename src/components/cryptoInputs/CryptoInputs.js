import React, { useState, useEffect } from "react";
import { InputNumber, Form, message } from "antd";

import s from "./style.module.css";

export const CryptoInputs = ({
  firstSelectedСrypto,
  secondSelectedCrypto,
  multiPrice,
  isFetching,
  isFetchError
}) => {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(multiPrice);

  useEffect(() => setSecondValue(firstValue * multiPrice), [
    firstValue,
    multiPrice
  ]);

  useEffect(() => {
    isFetchError && message.error("There are some problems with server.");
  });

  const onChangeFirst = value => {
    setFirstValue(value);
    setSecondValue(value * multiPrice);
  };

  const onChangeSecond = value => {
    setSecondValue(value);
    setFirstValue(value / multiPrice);
  };

  const isDisabled =
    !firstSelectedСrypto || !secondSelectedCrypto || isFetchError || isFetching;

  const fetchStatus = isFetchError
    ? "error"
    : isFetching
    ? "validating"
    : "success";

  return (
    <section className={s.inputsContainer}>
      <Form.Item
        hasFeedback={isFetching}
        className={s.inputNumber}
        validateStatus={fetchStatus}
      >
        <InputNumber
          size="large"
          value={firstValue}
          disabled={isDisabled}
          onChange={onChangeFirst}
          placeholder={firstValue}
          style={{ width: "100%" }}
          optionFilterProp="children"
        />
      </Form.Item>
      <Form.Item
        hasFeedback={isFetching}
        className={s.inputNumber}
        validateStatus={fetchStatus}
      >
        <InputNumber
          size="large"
          value={secondValue}
          disabled={isDisabled}
          onChange={onChangeSecond}
          placeholder={secondValue}
          style={{ width: "100%" }}
          optionFilterProp="children"
        />
      </Form.Item>
    </section>
  );
};
