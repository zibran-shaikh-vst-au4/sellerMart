import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbars/Navbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Dashboard from "../views/Dashboard/Dashboard"


class Home extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <Fragment>
         <Sidebar/>
         <Dashboard/>
        </Fragment>
      );
    }
    else {
      return (
        <div style={{ marginTop: '20vh' }}>
          <h2>You need to login first  <Link to="/admin">login</Link></h2>

        </div >
      )
    }
  }
}

const mapStateToProps = state => {
  if (state.auth.loggedIn && state.auth.admin) {
    let userData = JSON.parse(state.auth.admin);
    return {
      name: userData.name,
      loggedIn: state.auth.loggedIn
    };
  }
  else {
    return {};
  }
};
export default connect(mapStateToProps)(Home);
