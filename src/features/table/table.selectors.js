import { createSelector } from "reselect";

export const tableReducerSelecor = state => state.tableReducer;

export const isCryptoListFetchingSelector = createSelector(
  tableReducerSelecor,
  s => s.isFetching
);

export const isCryptoListFetchErrorSelector = createSelector(
  tableReducerSelecor,
  ({ isErrorNetwork }) => isErrorNetwork
);

export const cryptocurrencyList = state =>
  state.tableReducer.cryptocurrencyList;

export const cryptocurrencyListSelector = createSelector(
  cryptocurrencyList,
  cryptocurrencyList => cryptocurrencyList
);

export const cryptoListWithkeysSelector = createSelector(
  cryptocurrencyList,
  cryptocurrencyList => {
    return cryptocurrencyList.map(crypto => {
      crypto.key = crypto.FROMSYMBOL;
      return crypto;
    });
  }
);
