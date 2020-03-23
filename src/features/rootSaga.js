import { all } from "redux-saga/effects";

import {
  watchSubscribeToWebSocket,
  watchMultiPrice,
  watchCryptocurrencyNamesList
} from ".";

export default function* rootSaga() {
  yield all([
    watchCryptocurrencyNamesList(),
    watchSubscribeToWebSocket(),
    watchMultiPrice()
  ]);
}
