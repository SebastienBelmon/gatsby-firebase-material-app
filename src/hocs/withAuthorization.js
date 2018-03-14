import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';

import { firebase } from '../utils/firebase';
import * as routes from '../constants/routes';

const withAuthorization = (WrappedComponent, condition) => {
  class WithAuthorization extends Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          console.log("Not authorized, redirection to '" + routes.HOME + "'");
          navigateTo(routes.HOME);
        }
      });
    }

    render() {
      return this.context.loggedUser ? (
        <WrappedComponent {...this.props} />
      ) : null;
    }
  }

  WithAuthorization.contextTypes = {
    loggedUser: PropTypes.object,
  };

  return WithAuthorization;
};

export default withAuthorization;
