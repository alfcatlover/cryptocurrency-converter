import { createActions } from "redux-actions";

export const {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  getCryptocurrencyNamesList,
  setNamesList,
  setFirstCryptoName,
  setSecondCryptoName
} = createActions(
  {
    SET_FETCHING: () => {},
    SET_NETWORK_ERROR: () => {},
    SET_FETCHING_SUCCESS: () => {},
    GET_CRYPTOCURRENCY_NAMES_LIST: () => {},
    SET_NAMES_LIST: namesList => namesList,
    SET_FIRST_CRYPTO_NAME: values => values,
    SET_SECOND_CRYPTO_NAME: values => values
  },
  { prefix: "SELECTORS", namespace: "--" }
);
