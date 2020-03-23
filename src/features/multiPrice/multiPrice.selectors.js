import { createSelector } from "reselect";

export const multiPriceReducer = state => state.multiPriceReducer;

export const multiPrice = state => state.multiPriceReducer.multiPrice;

export const multiPriceSelector = createSelector(
  multiPriceReducer,
  ({ multiPrice }) => multiPrice
);

export const isMultiPriceFetchingSelector = createSelector(
  multiPriceReducer,
  ({ isFetching }) => isFetching
);

export const isMultiPriceErrorNetworkSelector = createSelector(
  multiPriceReducer,
  ({ isErrorNetwork }) => isErrorNetwork
);
