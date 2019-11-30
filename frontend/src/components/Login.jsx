// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";

// Local imports
import { actions } from "../store";

class Login extends Component {
  constructor() {
    super();
    this.facebookLogin = this.facebookLogin.bind(this);
  }

  facebookLogin(response) {
    console.log("fb response", response);
    const { fbLogin } = this.props;
    const { first_name, last_name, accessToken, email, id, picture } = response;
    const user = {
      firstName: first_name,
      lastName: last_name,
      email,
      facebookId: id,
      imageUrl: picture.data.url
    };

    const auth = { token: accessToken, user };
    fbLogin(auth);
  }

  render() {
    const { facebookLogin } = this;

    return (
      <div>
        <div id="businessLogin">
          <h2>For Business:</h2>
          <a href="/auth/linkedin">
            <img src="./assets/images/linkedin-signin.png" />
          </a>
        </div>
        <div id="creatorLogin">
          <h2>For Creators:</h2>
          <FacebookLogin
            appId="507675923424391"
            fields="first_name,last_name,email,picture"
            callback={facebookLogin}
            icon="fa-facebook"
            size="medium"
            scope="public_profile,email"
            textButton="Sign In With Facebook"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  fbLogin: auth =>
    //dispatch facebook auth & user data
    dispatch(actions.attemptToLogin(auth, history))
});

export default connect(null, mapDispatchToProps)(Login);