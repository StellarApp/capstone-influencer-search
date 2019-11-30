// Package imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Local imports
import { actions } from "../store";

class Nav extends Component {
  render() {
    const {loggedIn} = this.props
    return (
      <div>
        <NavLink to="/" exact>
          Connect Creator
        </NavLink>
        {!loggedIn ? (
          <NavLink to="/login">
            Login &rarr;
          </NavLink>
        ) : (
          <NavLink to="/creators">
            Creators
          </NavLink>
          <NavLink to="/collections">
            Collections
          </NavLink>
          <NavLink to="/account">
            Account
          </NavLink>
        )} 
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { loggedIn: !!auth.token, auth };
};

export default connect(mapStateToProps)(Nav);
