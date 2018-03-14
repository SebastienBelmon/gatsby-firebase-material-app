import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

import AccountMenu from './AccountMenu';
import ButtonLink from './ButtonLink';

import * as routes from '../../routes.js';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  flex: {
    flex: 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

class Navbar extends React.Component {
  render() {
    const { open, handleDrawerOpen, classes } = this.props;
    const { loggedUser } = this.context;

    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen()}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}
            noWrap
          >
            Awesome App
          </Typography>
          {loggedUser ? (
            <AccountMenu />
          ) : (
            <ButtonLink to={routes.LOGIN}>Login</ButtonLink>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

Navbar.contextTypes = {
  loggedUser: PropTypes.object,
};

export default withStyles(styles)(Navbar);
