import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTests } from "@reducers/Tests/actions";
import { selectTests } from "@reducers/Tests/selectors";
import CircularJSON from "circular-json";

@connect(state => ({ tests: selectTests(state) }))
export default class Tests extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    getTests: PropTypes.func,
    tests: PropTypes.object
  };

  componentWillMount() {
    this.props.dispatch(getTests());
  }

  render() {
    return (
      <div>
        <pre>{CircularJSON.stringify(this.props.tests, null, 2)}</pre>
      </div>
    );
  }
}
