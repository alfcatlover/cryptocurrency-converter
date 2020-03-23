import { createSelector } from "reselect";

export const selectorsReducer = state => state.selectorsReducer;
export const selectorsReducerSelector = createSelector(
  selectorsReducer,
  selectorsReducer => selectorsReducer
);

export const firstSelectedСrypto = state =>
  state.selectorsReducer.firstSelectedCrypto;

export const firstSelectedCryptoSelector = createSelector(
  selectorsReducer,
  ({ firstSelectedCrypto }) => firstSelectedCrypto
);

export const secondSelectedCrypto = state =>
  state.selectorsReducer.secondSelectedCrypto;

export const secondSelectedCryptoSelector = createSelector(
  selectorsReducer,
  ({ secondSelectedCrypto }) => secondSelectedCrypto
);

export const cryptocurrencyNames = state =>
  state.selectorsReducer.cryptocurrencyNamesList;

export const cryptocurrencyNamesSelector = createSelector(
  selectorsReducer,
  ({ cryptocurrencyNamesList }) =>
    cryptocurrencyNamesList.map(({ CoinInfo: { Name } }) => Name)
);
