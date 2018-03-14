import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { firebase } from '../utils/firebase';

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedUser: null,
        userData: null,
      };
    }

    getChildContext() {
      const { loggedUser, userData } = this.state;
      return {
        loggedUser,
        userData,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(loggedUser => {
        loggedUser
          ? this.setState({ loggedUser })
          : this.setState({ loggedUser: null });

        if (loggedUser) {
          firebase.db
            .ref('/users/' + loggedUser.uid)
            .once('value')
            .then(snap => {
              return snap.val();
            })
            .then(userData => {
              this.setState({ userData });
            });
        }
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithAuth.childContextTypes = {
    loggedUser: PropTypes.object,
    userData: PropTypes.object,
  };

  return WithAuth;
};

export default withAuth;
