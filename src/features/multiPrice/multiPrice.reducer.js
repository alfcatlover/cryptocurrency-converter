import { handleActions } from "redux-actions";

import {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setMultiPrice
} from "./multiPrice.actions";

const initialState = {
  isFetching: null,
  isErrorNetwork: null,
  multiPrice: null
};

export const multiPriceReducer = handleActions(
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
    [setMultiPrice]: (state, { payload }) => ({ ...state, multiPrice: payload })
  },
  initialState
);
