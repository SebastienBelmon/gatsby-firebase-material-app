import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { auth } from '../utils/firebase';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  textField: {
    margin: 'auto',
    display: 'block',
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
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
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const { email, password } = this.state;

    auth.signInWithEmailAndPassword(email, password);

    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange(name, e) {
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
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
            onClick={this.handleLogin}
            variant="raised"
            color="primary"
            className={classes.button}
          >
            Sign-in
          </Button>
        </form>
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
