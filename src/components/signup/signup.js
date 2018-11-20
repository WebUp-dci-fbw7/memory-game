import React, { Component, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import InputFiled from "../common/input/input";
import "./signup.css";
const axios = require('axios');

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Signup extends Component {

  constructor(props) {
      super(props);
      this.state = {
  			username: '',
        email: '',
  			password: '',
        passwordConf: ''

  		};

      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
  		this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handlePasswordConf = this.handlePasswordConf.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleUsernameChange(event) {
      this.setState(
  			{username: event.target.value}
  		);
    }

    handleEmailChange(event) {
  		this.setState(
  			{email: event.target.value}
  		);
  	}

  	handlePasswordChange(event) {
  		this.setState(
  			{password: event.target.value}
  		);
  	}
    handlePasswordConf(event) {
  		this.setState(
  			{passwordConf: event.target.value}
  		);
  	}
  	  handleClick(event) {
  			event.preventDefault();
  			axios.post('https://memory-game-7.herokuapp.com/user/signup', this.state).then(console.log(this.state.username))

   	 	  .then(function (response) {
          localStorage.setItem('token', JSON.stringify(response.data));
   	 	  })
   	 	  .catch(function (error) {
   	 	    console.log(error);
   	 	  });
  	  }


  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign up</Typography>

            <form className={classes.form}>
              <InputFiled fullWidth  label="User Name" value={this.state.username} onChange={this.handleUsernameChange} required />
              <InputFiled fullWidth type="email" label="Email" value={this.state.email} onChange={this.handleEmailChange} required />
              <InputFiled fullWidth type="password" label="Password" value={this.state.password} onChange={this.handlePasswordChange} required />
              <InputFiled fullWidth type="password" label="Confirm Password" value={this.state.passwordConf} onChange={this.handlePasswordConf} required />
              <button
                style={{
                  background: "none",
                  border: "none",
                  display: "block",
                  width: "100%"
                }}
              >
                <Button
                  onClick={this.handleClick}
                  fullWidth
                  className={classes.submit}
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </Button>
              </button>
            </form>
          </Paper>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Signup);
