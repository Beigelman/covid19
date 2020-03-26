import { all } from "redux-saga/effects";

import cases from "./cases/sagas";

export default function* rootSaga() {
  yield all([cases]);
}
