import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from '../hocs/withAuthorization';
import { withStyles } from 'material-ui/styles';

import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';

const styles = theme => ({
  user: {
    marginTop: theme.spacing.unit * 3,
  },
  input: {
    marginLeft: theme.spacing.unit * 2,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  saveButton: {
    marginRight: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit,
  },
});

class Account extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* HEADER */}
        <Typography variant="display1">My Account</Typography>
        <Divider />

        {/* Form */}
        <form>
          <Paper className={classes.user}>
            <Grid container justify="center" spacing={16}>
              <Grid item sm={6}>
                <TextField
                  className={classes.input}
                  required
                  id="firstName"
                  label="First Name"
                  margin="normal"
                  placeholder="First Name"
                  type="text"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  className={classes.input}
                  required
                  id="lastName"
                  label="Last Name"
                  margin="normal"
                  placeholder="Last Name"
                  type="text"
                />
              </Grid>
            </Grid>

            <Grid container justify="center" spacing={16}>
              <Grid item sm={6}>
                <TextField
                  className={classes.input}
                  required
                  id="email"
                  label="Email"
                  margin="normal"
                  placeholder="Email"
                  type="email"
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  className={classes.input}
                  id="phone"
                  label="Phone"
                  margin="normal"
                  placeholder="Phone"
                  type="phone"
                />
              </Grid>
            </Grid>
            <Grid container justify="flex-end" alignItems="flex-end">
              <Grid item className={classes.saveButton}>
                <Button variant="raised" color="primary">
                  <Save
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Save Profile
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </div>
    );
  }
}

const authCondition = loggedUser => !!loggedUser;
const AccountComponent = withAuthorization(Account, authCondition);

export default withStyles(styles)(AccountComponent);
