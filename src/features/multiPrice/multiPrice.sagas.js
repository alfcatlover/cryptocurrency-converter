import { takeLatest, call, put, select } from "redux-saga/effects";

import { fetchData } from "../../api";
import {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setMultiPrice
} from "./multiPrice.actions";
import {
  setFirstCryptoName,
  setSecondCryptoName,
  firstSelectedСrypto as firstSelected,
  secondSelectedCrypto as secondSelected
} from "../";

function* fetchMultiPrice() {
  const firstSelectedСrypto = yield select(firstSelected);
  const secondSelectedCrypto = yield select(secondSelected);

  if (!(firstSelectedСrypto && secondSelectedCrypto)) return;

  yield put(setFetching());
  try {
    const {
      [firstSelectedСrypto]: { [secondSelectedCrypto]: price }
    } = yield call(fetchData, {
      getMultiPrice: true,
      values: [firstSelectedСrypto, secondSelectedCrypto]
    });
    if (price.Response === "Error") throw new Error(price.Message);
    yield put(setFetchingSuccess());
    yield put(setMultiPrice(price));
  } catch (error) {
    console.error(error);
    yield put(setNetworkError());
  }
}

export function* watchMultiPrice() {
  yield takeLatest(
    [setFirstCryptoName.toString(), setSecondCryptoName.toString()],
    fetchMultiPrice
  );
}
