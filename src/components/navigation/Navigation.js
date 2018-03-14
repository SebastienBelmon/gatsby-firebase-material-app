import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import NavigationAuth from './NavigationAuth';

const Navigation = ({ children }, { loggedUser }) => (
  <NavigationAuth>{children}</NavigationAuth>
);

Navigation.contextTypes = {
  loggedUser: PropTypes.object,
};

export default Navigation;
