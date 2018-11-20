import React, { Component } from "react";
import "./profile.css";
import homer from "../../assets/homer.jpg";
import UploadForm from '../uploadform/uploadImage';
// import InputFiled from "../common/input/input";
import paperLayout from "../common/paperLayout/paperLayout";
import './profile.css'
class Profile extends Component {
  render() {
    return (

      <paperLayout>
        <div className="container">

          <div class="card text-center uploadform bg-dark">
            <div class="card-header bg-dark">

            </div>
            <div class="card-body bg-info">
              <img class="card-img homer" src={homer} alt="Card image"/>
              <h5 class="card-title">Hello Username</h5>
              <label for="name">Username: </label>
              <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"/>
              <p class="card-text">your email adress is : user @email.com</p>

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">

            </div>
          </div>
          <UploadForm />
        </div>

      </paperLayout>
    );
  }
}

export default Profile;
