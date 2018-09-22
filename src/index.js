import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import createHistory from "history/createBrowserHistory";
import Root from "@components/Common/Root";
import configureStore from "@services/Store";

const DOMRoot = document.getElementById("container");
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  DOMRoot
);

if (module.hot) {
  module.hot.accept("./components/Common/Root", () => {
    const NextRoot = require("./components/Common/Root").default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      DOMRoot
    );
  });
}
