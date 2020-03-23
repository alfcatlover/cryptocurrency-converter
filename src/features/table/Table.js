import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CryptoTable } from "../../components";
import { setCryptoFromListToSelector } from "./table.actions";
import {
  cryptoListWithkeysSelector,
  isCryptoListFetchingSelector,
  isCryptoListFetchErrorSelector
} from "./table.selectors";

export const Table = () => {
  const isFetching = useSelector(isCryptoListFetchingSelector);
  const isFetchError = useSelector(isCryptoListFetchErrorSelector);
  const cryptocurrencyListWithkeys = useSelector(cryptoListWithkeysSelector);

  const dispatch = useDispatch();
  return (
    <CryptoTable
      isFetching={isFetching}
      isFetchError={isFetchError}
      dataSource={cryptocurrencyListWithkeys}
      onRowClick={record => dispatch(setCryptoFromListToSelector(record))}
    />
  );
};
