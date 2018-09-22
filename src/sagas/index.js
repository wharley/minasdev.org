import { takeEvery, all } from "redux-saga/effects";
import { FETCH_TESTS_REQUEST } from "@reducers/Tests/types";
import { fetchTests } from "@sagas/Tests";

export default function* rootSaga() {
  yield all([takeEvery(FETCH_TESTS_REQUEST, fetchTests)]);
}
