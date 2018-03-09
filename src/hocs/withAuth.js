import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { firebase } from '../utils/firebase';

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedUser: null,
      };
    }

    getChildContext() {
      const { loggedUser } = this.state;
      return {
        loggedUser,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(loggedUser => {
        loggedUser
          ? this.setState({ loggedUser })
          : this.setState({ loggedUser: null });
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithAuth.childContextTypes = {
    loggedUser: PropTypes.object,
  };

  return WithAuth;
};

export default withAuth;
