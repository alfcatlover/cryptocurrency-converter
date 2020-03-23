import { takeLatest, call, put } from "redux-saga/effects";

import { fetchData } from "../../api";
import {
  getCryptocurrencyNamesList,
  setFetching,
  setFetchingSuccess,
  setNamesList,
  setNetworkError
} from "./selectors.actions";

function* fetchCryptocurrencyNamesList() {
  yield put(setFetching());
  try {
    const list = yield call(fetchData, { getNames: true, values: [75] });
    if (list.Response === "Error") throw new Error(list.Message);
    yield put(setFetchingSuccess());
    yield put(setNamesList(list.Data));
    yield put(setFetchingSuccess());
  } catch (error) {
    console.error(error);
    yield put(setNetworkError());
  }
}

export function* watchCryptocurrencyNamesList() {
  yield takeLatest(
    getCryptocurrencyNamesList.toString(),
    fetchCryptocurrencyNamesList
  );
}
