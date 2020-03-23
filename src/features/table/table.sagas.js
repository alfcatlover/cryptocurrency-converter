import { eventChannel, END } from "redux-saga";
import {
  call,
  put,
  take,
  cancel,
  cancelled,
  select,
  fork,
  all,
  race
} from "redux-saga/effects";

import { getSubs } from "./table.utils";
import { getUrl } from "../../api";
import {
  setFetching,
  setNetworkError,
  setFetchingSuccess,
  setCryptocurrency,
  setCryptoFromListToSelector,
  closeWsConnection,
  wsDisconnectSuccess
} from "./table.actions";
import {
  setNamesList,
  setFirstCryptoName,
  setSecondCryptoName,
  firstSelectedСrypto,
  setFetching as setFetchingSelectors,
  setFetchingSuccess as setFetchingSuccessSelectors,
  setNetworkError as setNetworkErrorSelectors
} from "../";

function addWebSocketConnection() {
  return new Promise((res, rej) => {
    const socket = new WebSocket(getUrl({ getCryptoPrice: true }));

    socket.onopen = function() {
      res(socket);
    };

    socket.onerror = function(e) {
      rej(e);
    };
  });
}

function createSocketChannel(socket, list) {
  return eventChannel(emit => {
    const subRequest = {
      action: "SubAdd",
      subs: getSubs(list)
    };
    socket.send(JSON.stringify(subRequest));
    socket.onmessage = event => {
      emit(JSON.parse(event.data));
    };

    socket.onclose = () => {
      emit(END);
    };

    const unsubscribe = () => {
      socket.onmessage = null;
    };

    return unsubscribe;
  });
}

function* listenForSocketMessages() {
  let socket, socketChannel;

  try {
    yield call(fetchStatusCryptoNames);

    const cryptoNamesList = yield call(getCryptocurrencyNamesList);

    ({ socket, socketChannel } = yield call(connectToWS, cryptoNamesList));

    yield call(getPayloadFromWebSocket, socketChannel);
  } catch (error) {
    console.error(error);
    yield put(setNetworkError());
  } finally {
    if (yield cancelled()) {
      socketChannel.close();
      socket.close();
    } else {
      yield put(setNetworkError());
    }
  }
}

function* cryptoFromListToSelector() {
  while (true) {
    const { payload } = yield take(setCryptoFromListToSelector.toString());
    const firstSelectorValue = yield select(firstSelectedСrypto);
    yield all([
      put(setSecondCryptoName(firstSelectorValue)),
      put(setFirstCryptoName(payload.FROMSYMBOL))
    ]);
  }
}

function* fetchStatusCryptoNames() {
  while (true) {
    yield take(setFetchingSelectors.toString());
    yield put(setFetching());

    const [isError] = yield race([
      take(setNetworkErrorSelectors.toString()),
      take(setFetchingSuccessSelectors.toString())
    ]);

    if (isError) {
      throw new Error("Network error");
    } else return;
  }
}

function* getCryptocurrencyNamesList() {
  while (true) {
    yield take(setNamesList.toString());

    return yield select(state =>
      Object.values(state.selectorsReducer.cryptocurrencyNamesList).map(
        el => el.CoinInfo.Name
      )
    );
  }
}

function* getPayloadFromWebSocket(socketChannel) {
  while (true) {
    const payload = yield take(socketChannel);
    if (payload.TYPE === "5" && payload.PRICE) {
      yield put(setCryptocurrency(payload));
      yield put(setFetchingSuccess());
    }
  }
}

function* connectToWS(cryptoNames) {
  try {
    const socket = yield call(addWebSocketConnection);
    const socketChannel = yield call(createSocketChannel, socket, cryptoNames);
    return { socket, socketChannel };
  } catch (error) {
    throw new Error(error);
  }
}

export function* watchSubscribeToWebSocket() {
  const socket = yield fork(listenForSocketMessages);
  yield fork(cryptoFromListToSelector);
  yield take(closeWsConnection.toString());
  yield cancel(socket);
  yield put(wsDisconnectSuccess());
}
