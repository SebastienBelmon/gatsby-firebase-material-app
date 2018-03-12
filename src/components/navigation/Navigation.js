import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import NavigationAuth from './NavigationAuth';
import NavigationNonAuth from './NavigationNonAuth';

const Navigation = ({ children }, { loggedUser }) => (
  <div>
    {loggedUser ? (
      <NavigationAuth>{children}</NavigationAuth>
    ) : (
      <NavigationNonAuth>{children}</NavigationNonAuth>
    )}
  </div>
);

Navigation.contextTypes = {
  loggedUser: PropTypes.object,
};

export default Navigation;
