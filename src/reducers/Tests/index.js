import { fromJS } from "immutable";
import { createActions } from "@reducers";
import {
  FETCH_TESTS_REQUEST,
  FETCH_TESTS_SUCCESS,
  FETCH_TESTS_FAILURE
} from "@reducers/Tests/types";

export const initialState = fromJS({
  isLoading: false,
  error: null,
  tests: {}
});

export default (state = initialState, action) => {
  return createActions(
    { state, action },
    {
      [FETCH_TESTS_REQUEST]: () => state.merge({ isLoading: true }),
      [FETCH_TESTS_SUCCESS]: () => state.merge({ isLoading: false, tests: action.payload.tests }),
      [FETCH_TESTS_FAILURE]: () => state.merge({ isLoading: false, error: action.payload.error })
    }
  );
};
