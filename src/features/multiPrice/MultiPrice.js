import React from "react";
import { useSelector } from "react-redux";

import { CryptoInputs } from "../../components";
import {
  multiPriceSelector,
  isMultiPriceFetchingSelector,
  isMultiPriceErrorNetworkSelector
} from "./multiPrice.selectors";
import { firstSelectedCryptoSelector, secondSelectedCryptoSelector } from "../";

export const MultiPrice = () => {
  const multiPrice = useSelector(multiPriceSelector);

  const isFetching = useSelector(isMultiPriceFetchingSelector);
  const isFetchError = useSelector(isMultiPriceErrorNetworkSelector);
  const firstSelectedСrypto = useSelector(firstSelectedCryptoSelector);
  const secondSelectedCrypto = useSelector(secondSelectedCryptoSelector);

  return (
    <CryptoInputs
      multiPrice={multiPrice}
      isFetching={isFetching}
      isFetchError={isFetchError}
      firstSelectedСrypto={firstSelectedСrypto}
      secondSelectedCrypto={secondSelectedCrypto}
    />
  );
};
