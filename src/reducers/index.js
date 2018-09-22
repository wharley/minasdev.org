import { combineReducers } from "redux-immutable";
import routerReducer from "@reducers/Router";
import testsReducer from "@reducers/Tests";

export const createActions = ({ state, action }, actions) => {
  const cases = actions[action.type];
  return cases ? cases() : state;
};

const rootReducer = combineReducers({
  routing: routerReducer,
  tests: testsReducer
});

export default rootReducer;
