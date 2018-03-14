import React from 'react';
import PropTypes from 'prop-types';
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
      firstName: '',
      lastName: '',
      role: '',
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

  componentDidMount() {
    const id = firebase.auth.currentUser ? firebase.auth.currentUser.uid : '';
    if (id) {
      firebase.db
        .ref('/users/' + id)
        .once('value')
        .then(snap => {
          return snap.val();
        })
        .then(({ firstName, lastName, role }) => {
          this.setState({
            firstName,
            lastName,
            role,
          });
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const { classes } = this.props;
    const { open, firstName, lastName, role } = this.state;
    const { loggedUser } = this.context;

    if (!role && loggedUser) {
      return <Loading />;
    }

    return (
      <div className={classes.root}>
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

        {loggedUser && (
          <div>
            <br />
            <br />
            <br />
            <Typography>user logged info below:</Typography>
            <Typography>
              {firstName} {lastName} - {role}
            </Typography>
          </div>
        )}

        {/* Only admin */}
        {role === 'admin' && <Typography>Welcome Administrator!</Typography>}
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

export default withStyles(styles)(Index);
