import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Navbar from './Navbar';
import BigDrawer from './BigDrawer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
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

class Navigation extends Component {
  state = {
    open: false,
    openList: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  toggleOpenList = () => {
    this.setState({ openList: !this.state.openList });
  };

  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        {/* HORIZONTAL NAVBAR */}
        <Navbar
          handleDrawerOpen={this.handleDrawerOpen}
          open={this.state.open}
        />
        {/* DRAWER MENU */}
        <BigDrawer
          open={this.state.open}
          openList={this.state.openList}
          toggleOpenList={this.toggleOpenList}
          handleDrawerClose={this.handleDrawerClose}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default withStyles(styles)(Navigation);
