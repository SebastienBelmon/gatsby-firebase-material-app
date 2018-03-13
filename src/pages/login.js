import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';

import * as routes from '../routes';

import { auth } from '../utils/firebase';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  textField: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    margin: 'auto',
    display: 'block',
    maxWidth: 250,
    padding: 20,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, e) {
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    const { email, password } = this.state;

    auth.signInWithEmailAndPassword(email, password);

    this.setState({
      email: '',
      password: '',
    });
    navigateTo(routes.HOME);
  }

  render() {
    const { classes } = this.props;
    const { email, password, isSignUp } = this.state;
    const { loggedUser } = this.context;

    if (loggedUser) {
      return (
        <div className={classes.root}>
          <Typography variant="title" color="inherit" noWrap>
            Welcome ! You are already logged with {loggedUser.email}
          </Typography>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="title">Sign in</Typography>
          <form onSubmit={this.handleSubmi}>
            <TextField
              required
              id="email"
              label="Email"
              className={classes.textField}
              margin="normal"
              type="email"
              value={email}
              onChange={e => this.handleChange('email', e)}
            />
            <TextField
              required
              id="password"
              label="Password"
              className={classes.textField}
              margin="normal"
              type="password"
              value={password}
              onChange={e => this.handleChange('password', e)}
            />
            <Button
              onClick={this.handleSubmit}
              variant="raised"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Sign-in
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

Login.contextTypes = {
  loggedUser: PropTypes.object,
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
