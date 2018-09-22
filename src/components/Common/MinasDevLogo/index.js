import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UI";

const MinasDevLogo = () => {
  return (
    <Wrapper>
      <a href="">
        <svg>
          <use xlinkHref="/images/vectors/objects.svg#minasdev-logo" />
        </svg>
        Minas Dev
      </a>
    </Wrapper>
  );
};

MinasDevLogo.propTypes = {};

export default MinasDevLogo;
