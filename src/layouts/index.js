import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import withRoot from '../hocs/withRoot';
import withAuth from '../hocs/withAuth';

import Navigation from '../components/navigation/Navigation';

const LayoutIndex = ({ children }) => <Navigation>{children()}</Navigation>;

const App = withAuth(LayoutIndex);

export default withRoot(App);
