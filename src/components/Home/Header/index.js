import React from "react";
import PropTypes from "prop-types";
import { MinasDevLogo } from "@components/Common";
import { Wrapper } from "./UI";

const Header = () => {
  return (
    <Wrapper>
      <MinasDevLogo />
      <ul>
        <li>
          <a href="">Manifesto</a>
        </li>
        <li>
          <a href="">Código de Conduta</a>
        </li>
        <li>
          <a href="">slack.minasdev.org</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">GitHub do Minas Dev</a>
        </li>
        <li>
          <a href="">Twitter do Minas Dev</a>
        </li>
      </ul>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
