import { createActions } from "redux-actions";

export const {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setMultiPrice
} = createActions(
  {
    SET_FETCHING: () => {},
    SET_NETWORK_ERROR: () => {},
    SET_FETCHING_SUCCESS: () => {},
    SET_MULTI_PRICE: price => price
  },
  { prefix: "MULTI_PRICE", namespace: "--" }
);
