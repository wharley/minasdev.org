import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UI";
import { renderRoutes } from "@services/Routes";

const Layout = ({ route }) => (
  <Wrapper>
    <div>{renderRoutes(route.routes)}</div>
  </Wrapper>
);

Layout.propTypes = {
  route: PropTypes.object.isRequired
};

export default Layout;
