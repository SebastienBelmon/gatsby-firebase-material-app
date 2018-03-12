import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { auth } from '../utils/firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isSignUp: true,
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

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
  }

  render() {
    const { email, password, isSignUp } = this.state;
    const { loggedUser } = this.context;

    return (
      <div>
        {loggedUser && (
          <div>
            <h3>Welcome ! You are logged with {loggedUser.email}</h3>
            <button onClick={() => auth.signOut(loggedUser.email)}>
              LogOut
            </button>
            <br />
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              name="email"
              onChange={this.handleChange}
              type="email"
              value={email}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              value={password}
            />
          </div>
          {isSignUp ? (
            <button type="submit">Register</button>
          ) : (
            <button onClick={this.handleLogin}>LogIn</button>
          )}
          <button onClick={() => this.setState({ isSignUp: !isSignUp })}>
            Toggle
          </button>
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  loggedUser: PropTypes.object,
};
