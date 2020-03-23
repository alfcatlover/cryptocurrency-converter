import { createActions } from "redux-actions";

export const {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setCryptocurrency,
  setCryptoFromListToSelector,
  closeWsConnection,
  wsDisconnectSuccess
} = createActions(
  {
    SET_FETCHING: () => {},
    SET_NETWORK_ERROR: () => {},
    SET_FETCHING_SUCCESS: () => {},
    SET_CRYPTOCURRENCY: rate => rate,
    SET_CRYPTO_FROM_LIST_TO_SELECTOR: symbol => symbol,
    CLOSE_WS_CONNECTION: () => {},
    WS_DISCONNECT_SUCCESS: () => {}
  },
  { prefix: "TABLE", namespace: "--" }
);
