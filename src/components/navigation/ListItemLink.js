import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const ListItemLink = props => (
  <ListItem button component={Link} to={props.to}>
    <ListItemIcon>{props.children}</ListItemIcon>
    <ListItemText primary={props.primary} />
  </ListItem>
);

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element,
  primary: PropTypes.string,
};

export default ListItemLink;
