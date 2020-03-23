import { handleActions } from "redux-actions";

import {
  setFetching,
  setFetchingSuccess,
  setNetworkError,
  setNamesList,
  setFirstCryptoName,
  setSecondCryptoName
} from "./selectors.actions";

const initialState = {
  isFetching: null,
  isErrorNetwork: null,
  isFetchingSuccess: null,
  cryptocurrencyList: [],
  cryptocurrencyNamesList: [],
  firstSelectedCrypto: null,
  secondSelectedCrypto: null
};

export const selectorsReducer = handleActions(
  {
    [setFetching]: state => ({
      ...state,
      isFetching: true,
      isErrorNetwork: false
    }),
    [setNetworkError]: state => ({
      ...state,
      isFetching: false,
      isErrorNetwork: true
    }),
    [setFetchingSuccess]: state => ({
      ...state,
      isFetching: false,
      isErrorNetwork: false
    }),
    [setNamesList]: (state, { payload }) => ({
      ...state,
      cryptocurrencyNamesList: Object.values(payload)
    }),
    [setFirstCryptoName]: (state, { payload }) => {
      return { ...state, firstSelectedCrypto: payload };
    },
    [setSecondCryptoName]: (state, { payload }) => {
      return { ...state, secondSelectedCrypto: payload };
    }
  },
  initialState
);
