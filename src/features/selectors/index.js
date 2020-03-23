export { Selectors } from "./Selectors";

export { selectorsReducer } from "./selectors.reducer";

export { watchCryptocurrencyNamesList } from "./selectors.sagas";

export {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setNamesList,
  setFirstCryptoName,
  setSecondCryptoName
} from "./selectors.actions";

export {
  firstSelectedСrypto,
  secondSelectedCrypto,
  firstSelectedCryptoSelector,
  secondSelectedCryptoSelector
} from "./selectors.selectors";
