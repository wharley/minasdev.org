import { put, call } from "redux-saga/effects";
import { getTestsSuccess, getTestsFailure } from "@reducers/Tests/actions";
import { getTestsEndpoint } from "@services/Api";

export function* fetchTests() {
  try {
    const tests = yield call(getTestsEndpoint);
    yield put(getTestsSuccess(tests.data));
  } catch (error) {
    yield put(getTestsFailure(error));
  }
}
