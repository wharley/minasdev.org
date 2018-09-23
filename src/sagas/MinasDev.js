import { put, call } from "redux-saga/effects";
import { getMinasDevEventsSuccess, getMinasDevEventsFailure } from "@reducers/MinasDev/actions";
import { getMinasDevEvents } from "@services/Api";

export function* fetchMinasDevEvents() {
  try {
    const events = yield call(getMinasDevEvents);
    yield put(getMinasDevEventsSuccess(events.data));
  } catch (error) {
    yield put(getMinasDevEventsFailure(error));
  }
}
