import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from '../hocs/withAuthorization';

class Account extends React.Component {
  render() {
    return <div>my account</div>;
  }
}

const authCondition = loggedUser => !!loggedUser;

export default withAuthorization(Account, authCondition);
