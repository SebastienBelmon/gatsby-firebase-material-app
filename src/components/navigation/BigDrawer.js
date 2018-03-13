import React from 'react';
import PropTypes from 'prop-types';

import * as routes from '../../routes.js';

import { withStyles } from 'material-ui/styles';

import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';

import HomeIcon from 'material-ui-icons/Home';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';

import ListItemLink from './ListItemLink';

const drawerWidth = 240;

const styles = theme => ({
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

class BigDrawer extends React.Component {
  render() {
    const {
      classes,
      theme,
      openList,
      toggleOpenList,
      handleDrawerClose,
      open,
    } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          ),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => handleDrawerClose()}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          <ListItemLink to={routes.HOME} primary="Home">
            <HomeIcon />
          </ListItemLink>
          <ListItemLink to={routes.FORM} primary="Form">
            <DraftsIcon />
          </ListItemLink>
        </List>
        <Divider />
        <List component="nav">
          <ListItemLink to={routes.HOME} primary="OutBox">
            <InboxIcon />
          </ListItemLink>
          <ListItem button onClick={() => toggleOpenList()}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    );
  }
}

BigDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  openList: PropTypes.bool.isRequired,
  toggleOpenList: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(BigDrawer);
