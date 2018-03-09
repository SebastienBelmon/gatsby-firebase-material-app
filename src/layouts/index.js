import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import withRoot from '../hocs/withRoot';
import withAuth from '../hocs/withAuth';

import Navigation from '../components/Navigation';

const styles = theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class LayoutIndex extends Component {
  render() {
    const { classes, theme, children } = this.props;

    return (
      <div className={classes.root}>
        <Navigation>{children()}</Navigation>
      </div>
    );
  }
}

export default withStyles(styles, { withThem: true })(withAuth(LayoutIndex));
