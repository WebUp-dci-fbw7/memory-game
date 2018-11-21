// import React, { Component } from "react";
import "./profile.css";
import homer from "../../assets/homer.jpg";
// import paperLayout from "../common/paperLayout/paperLayout";
//
// class Profile extends Component {
//   render() {
//     return (
//
//       // <paperLayout>
//       //   <div className="container">
//       //     <div class="card text-center  bg-dark">
//       //       <div class="card-header bg-dark">
//       //
//       //       </div>
//       //       <div class="card-body bg-info">
//       //         <img class="card-img homer" src={homer} alt="Card image"/>
//       //         <h5 class="card-title">Hello Username</h5>
//       //         <label for="name">Username: </label>
//       //         <input type="text" id="name" name="name" required
//       //  minlength="4" maxlength="8" size="10"/>
//       //         <p class="card-text">your email adress is : user @email.com</p>
//       //
//       //         <a href="#" class="btn btn-primary">Go somewhere</a>
//       //       </div>
//       //       <div class="card-footer text-muted">
//       //
//       //       </div>
//       //     </div>
//       //   </div>
//       //
//       // </paperLayout>
//       <div className="container">
//
//       </div>
//     );
//   }
// }
//
// export default Profile;
//
//
// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
//
// const styles = {
//   row: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   avatar: {
//     margin: 10,
//   },
//   bigAvatar: {
//     width: 60,
//     height: 60,
//   },
// };

import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 120,
    height:120,
  }
};


function ProfilePicture(props) {
  const { classes } = props;
  return (
    <div className="wrapper">
      <h2>Hello User</h2>
      <div className="center-content">


    <div className={classes.row}>

      <Avatar
        alt="homi"
        src={homer}
        className={classes.bigAvatar}

      />

    </div>
    <div className="margin">
    <div className={classes.row}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">You want to change your username?</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      {/* <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      /> */}
      </div>
      </div>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </div>
      </div>
  );
}

ProfilePicture.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfilePicture);
