import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from 'axios';
/* import Home from '../Home/home' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { NotificationContainer, NotificationManager } from 'react-notifications';
class Login extends Component {
  state = { email: "", password: "", errors: {} };

  handleForm = e => {
    e.preventDefault();
    if (this.state.email === '' || this.state.password === '') {
      NotificationManager.warning("Email And Password Required");
      return false;
    }
    const data = { email: this.state.email, password: this.state.password };
    axios
      .post("http://localhost:9000/sellers/login", data)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        this.props.setLogin(JSON.stringify(result.data.user));
         /*  NotificationManager.success(result.data.msg); */
         this.props.history.push("/stats");

      })
      .catch(err => {
        if (err.response && err.response.status === 404)
          NotificationManager.error(err.response.data.msg);
        else
          NotificationManager.error("Something Went Wrong");
        this.setState({ errors: err.response })
      });
      
  };
  handleInput = e => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="content " style={{ marginTop: '15vh' }}>

        <NotificationContainer />
        <form onSubmit={this.handleForm}>
         <div className="card shadow m-auto w-25"  >
            <div className="font-weight-bold text-center mt-2" style={{ fontSize: 20 }}>Login</div>
            <div className="card-body">
              <div className="form-group">
                <label >Email address</label>
                <input type="email" name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" name="password" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
              </div>
              <button classname="btn btn-sm" style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial' }}><NavLink to="/forget-password" className="nav-link" style={{ padding: '3px' }}>forget password ?</NavLink></button>
            </div>
            <div className="text-center mb-2">
              <button type="submit" className="btn mb-2 " style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', color: "white", }}><nav className="nav-link" style={{ padding: '3px' }}><FontAwesomeIcon icon={faSignInAlt} style={{ fontSize: '1em', marginRight: '5px' }} />Login</nav></button>
              {/* <button type="submit" classname="btn subbtn" style={{ backgroundColor: '#071e3d', color: 'white', borderRadius: '10px', border: 'initial', marginLeft: '10px' }}><FontAwesomeIcon icon={faHome} style={{ fontSize: '1em', marginRight: '5px' }} />submit</button> */}

              {/* <button classname="btn btn-sm" style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', marginLeft: '10px' }}><NavLink to="/" className="nav-link" style={{ padding: '3px' }}><FontAwesomeIcon icon={faHome} style={{ fontSize: '1em', marginRight: '5px' }} /> back to home</NavLink></button>
 */}            </div>




          </div>
          {/* </div>
            <div className="col-sm-3">

            </div>
          </div> */}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
