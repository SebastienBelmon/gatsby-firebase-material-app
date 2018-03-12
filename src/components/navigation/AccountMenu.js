import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';
import deepOrange from 'material-ui/colors/deepOrange';

import { auth } from '../../utils/firebase';

const styles = {
  account: {
    marginRight: '15px',
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
};

class AccountMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  handleMenu(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  signOut() {
    auth.signOut();
    this.handleClose();
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          className={classes.account}
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <Avatar className={classes.orangeAvatar}>SB</Avatar>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(AccountMenu);
