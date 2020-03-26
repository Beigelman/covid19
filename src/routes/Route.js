import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Layout from "../pages/Layout";

export default function RoutesWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RoutesWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RoutesWrapper.defaultProps = {
  isPrivate: false
};
