import {
  FETCH_TESTS_REQUEST,
  FETCH_TESTS_SUCCESS,
  FETCH_TESTS_FAILURE
} from "@reducers/Tests/types";

export const getTests = () => {
  return {
    type: FETCH_TESTS_REQUEST
  };
};

export const getTestsSuccess = tests => {
  return {
    type: FETCH_TESTS_SUCCESS,
    payload: { tests }
  };
};

export const getTestsFailure = error => {
  return {
    type: FETCH_TESTS_FAILURE,
    payload: { error }
  };
};
