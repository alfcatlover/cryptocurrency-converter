export { Selectors } from "./selectors";
export { Table } from "./table";
export { MultiPrice } from "./multiPrice";

export { selectorsReducer } from "./selectors";
export { tableReducer } from "./table";
export { multiPriceReducer } from "./multiPrice";

export { watchSubscribeToWebSocket } from "./table";
export { watchCryptocurrencyNamesList } from "./selectors";
export { watchMultiPrice } from "./multiPrice";

export {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setNamesList,
  setFirstCryptoName,
  setSecondCryptoName
} from "./selectors";

export {
  firstSelectedСrypto,
  secondSelectedCrypto,
  firstSelectedCryptoSelector,
  secondSelectedCryptoSelector
} from "./selectors";
