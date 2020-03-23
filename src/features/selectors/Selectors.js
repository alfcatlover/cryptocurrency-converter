import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CryptoSelectors } from "../../components";
import {
  getCryptocurrencyNamesList,
  setFirstCryptoName,
  setSecondCryptoName
} from "./selectors.actions";
import {
  selectorsReducerSelector,
  firstSelectedCryptoSelector,
  secondSelectedCryptoSelector,
  cryptocurrencyNamesSelector
} from "./selectors.selectors";

export const Selectors = () => {
  const mainReducer = useSelector(selectorsReducerSelector);
  const cryptocurrencyNames = useSelector(cryptocurrencyNamesSelector);
  const firstSelectedCrypto = useSelector(firstSelectedCryptoSelector);
  const secondSelectedCrypto = useSelector(secondSelectedCryptoSelector);

  const dispatch = useDispatch();

  function onChangeFirst(value) {
    dispatch(setFirstCryptoName(value));
  }

  function onChangeSecond(value) {
    dispatch(setSecondCryptoName(value));
  }

  useEffect(() => {
    dispatch(getCryptocurrencyNamesList());
  }, []);

  return (
    <CryptoSelectors
      mainReducer={mainReducer}
      onChangeFirst={onChangeFirst}
      options={cryptocurrencyNames}
      onChangeSecond={onChangeSecond}
      secondSelectedCrypto={secondSelectedCrypto}
      firstSelectedCrypto={firstSelectedCrypto}
    />
  );
};
