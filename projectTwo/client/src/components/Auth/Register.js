import React, { Component } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
/* import { NavLink } from "react-router-dom"; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    errors: {}
  };

  handleForm = e => {
    e.preventDefault();
    if (this.state.password === '' || this.state.password_confirmation === '' || this.state.email === '' || this.state.name === '') {
      NotificationManager.warning("Please Enter Name,Email Password And Confirm Password");
      return false;
    }
    else if (this.state.password !== this.state.password_confirmation) {
      NotificationManager.warning("Your Password Not Matched ! Please Check your pasword and confirm password");
      return false;
    }
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    axios
      .post("http://localhost:9000/sellers/register", data)
      .then(result => {

        NotificationManager.success(result.data.msg);

      })
      .catch(err => {
        if (err.response && err.response.status === 400)
          NotificationManager.error(err.response.data.msg);
        else
          NotificationManager.error("Something Went Wrong");
        this.setState({ errors: err.response })
      });
    this.props.history.push("/login");
  };

  handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="content" style={{ marginTop: '15vh' }}>
        <NotificationContainer />
        <form onSubmit={this.handleForm}>
          <div className="card shadow m-auto w-25" >
            <div className="font-weight-bold text-center mt-2" style={{ fontSize: 20 }}>Register</div>
            <div className="card-body">
              <div className="form-group">
                <label >Name</label>
                <input type="text" name="name" onChange={this.handleInput} className="form-control" placeholder="Enter Name" />
              </div>

              <div className="form-group">
                <label >Email address</label>
                <input type="email" name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" name="password" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
              </div>
              <div className="form-group">
                <label >Confirm Password</label>
                <input type="password" name="password_confirmation" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
              </div>
              <button type="submit" className="btn offset-md-4 " style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', color: "white", }}><nav className="nav-link" style={{ padding: '3px' }}><FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '1em', marginRight: '5px' }} />Register</nav></button>
            </div>

            {/*  <button classname="btn btn-sm" style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', marginLeft: '10px' }}><NavLink to="/" className="nav-link" style={{ padding: '3px' }}><FontAwesomeIcon icon={faHome} style={{ fontSize: '1em', marginRight: '5px' }} /> back to home</NavLink></button></div>
 */}
          </div>

        </form>
      </div>
    );
  }
}


export default Register;

