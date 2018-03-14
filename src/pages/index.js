import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

import Loading from '../components/Loading';

import { firebase, db } from '../utils/firebase';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    margin: 'auto',
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const { loggedUser } = this.context;

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Gatsby material-ui and firebase starter</title>
          <meta
            name="description"
            content="Simple starter for Gatsby using Material-ui and Firebase"
          />
        </Helmet>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Build your app</DialogTitle>
          <DialogContent>
            <DialogContentText>Simple dialog example</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Button variant="raised" color="secondary" onClick={this.handleClick}>
          Dialog button example
        </Button>

        {loggedUser && <UserInfo />}
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

Index.contextTypes = {
  loggedUser: PropTypes.object,
};

const UserInfo = (props, { userData }) => {
  if (!userData) return <Loading />;

  return (
    <div>
      <br />
      <br />
      <br />
      <Typography>user logged info below:</Typography>
      <Typography>
        {userData.firstName} {userData.lastName} - {userData.role}
      </Typography>
      {userData.role === 'admin' && (
        <Typography>Welcome Administrator!</Typography>
      )}
    </div>
  );
};

UserInfo.contextTypes = {
  loggedUser: PropTypes.object,
  userData: PropTypes.object,
};

export default withStyles(styles)(Index);
