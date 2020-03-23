import { handleActions } from "redux-actions";

import {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setCryptocurrency,
  setCryptoFromListToSelector,
  wsDisconnectSuccess
} from "./table.actions";

const initialState = {
  isFetching: null,
  isErrorNetwork: null,
  isWsDisconnectSuccess: false,
  cryptocurrencyList: [],
  clickedCrypto: null
};

export const tableReducer = handleActions(
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
    [setCryptocurrency]: (state, { payload }) => {
      const cryptoList = [...state.cryptocurrencyList];
      const crypto = state.cryptocurrencyList.find(
        crypto => crypto.FROMSYMBOL === payload.FROMSYMBOL
      );
      if (crypto) {
        return {
          ...state,
          cryptocurrencyList: cryptoList.map(crypto =>
            crypto.FROMSYMBOL === payload.FROMSYMBOL ? payload : crypto
          )
        };
      } else {
        cryptoList.push(payload);
        return {
          ...state,
          cryptocurrencyList: cryptoList
        };
      }
    },
    [setCryptoFromListToSelector]: (state, { payload }) => ({
      ...state,
      clickedCrypto: payload.FROMSYMBOL
    }),
    [wsDisconnectSuccess]: state => ({ ...state, isWsDisconnectSuccess: true })
  },
  initialState
);
