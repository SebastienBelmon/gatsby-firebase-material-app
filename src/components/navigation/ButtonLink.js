import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Button from 'material-ui/Button';

import * as routes from '../../routes.js';

const ButtonLink = ({ to, color, children }) => (
  <Button color={color || 'inherit'} to={to} component={Link}>
    {children}
  </Button>
);

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default ButtonLink;
