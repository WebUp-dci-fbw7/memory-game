import React, { Component, Fragment } from "react";
import "./home.css";
// import homer from "../../assets/homer.jpg";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import WOW from "wowjs";
import HomeVideoBackground from "../../assets/back-video.mp4";
import VideoCover from "react-video-cover";

class Home extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <Fragment>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        >
          <VideoCover
            videoOptions={{
              src: HomeVideoBackground,
              autoPlay: true,
              loop: true
            }}
          />
        </div>
        <div className="m-auto  disappear">
          <div class="headline-home mt-5">
            <h1>Create Your Memory Game</h1>
            <p class="text-home">
              Upload your own images with just a few clicks and invite your
              friends to play !!!
            </p>
          </div>

          <a
            href="/game"
            type="button"
            className="wow bounceInLeft btn btn-primary btn-lg btn-block button-style"
          >
            <i class="fas fa-gamepad mr-2" /> Play Now
          </a>
          <a
            href="/startGame"
            type="button"
            className="wow bounceInRight btn btn-danger btn-lg btn-block button-style"
          >
            <i class="fas fa-hammer mr-2" />
            Create Your Game
          </a>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(Home));
