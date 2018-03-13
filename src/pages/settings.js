import React from 'react';

import withAuthorization from '../hocs/withAuthorization';
import { withStyles } from 'material-ui/styles';

import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const styles = theme => ({
  user: {
    marginTop: theme.spacing.unit * 4,
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
  paperTitle: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    margin: 'auto',
    maxWidth: 850,
  },
});

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkTheme: false,
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { darkTheme } = this.state;

    return (
      <div>
        {/* HEADER */}
        <Typography variant="display1">Settings</Typography>
        <Divider />

        <div className={classes.container}>
          {/* Form */}
          <form>
            <Paper className={classes.user}>
              <Typography className={classes.paperTitle} variant="headline">
                App theme (under construction)
              </Typography>
              <Divider />
              <Grid container justify="center" spacing={16}>
                <Grid item sm={12}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={darkTheme}
                        onChange={this.handleChange('darkTheme')}
                        value="darkTheme"
                        color="secondary"
                      />
                    }
                    label="Dark theme (not working)"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container justify="flex-end" alignItems="flex-end">
                <Grid item className={classes.saveButton}>
                  <Button variant="raised" color="primary">
                    <Save
                      className={classNames(
                        classes.leftIcon,
                        classes.iconSmall
                      )}
                    />
                    Save Settings
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </div>
      </div>
    );
  }
}

const authCondition = loggedUser => !!loggedUser;
const SettingsComponent = withAuthorization(Settings, authCondition);

export default withStyles(styles)(SettingsComponent);
