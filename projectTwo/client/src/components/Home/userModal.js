import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Toggle from 'react-toggle';
import "react-toggle/style.css";



class UserModal extends Component {
    state = {
        /*    _id: JSON.parse(localStorage.getItem('user'))._id,
           name: JSON.parse(localStorage.getItem('user')).name,
           email: JSON.parse(localStorage.getItem('user')).email, */
        changePassword: false,
        currentPassword: '',
        password: '',
        password_confirmation: '',

    }


    handleInput = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleToggleInput = e => {
        const { checked } = e.target;
        this.setState({ changePassword: checked, password: '', password_confirmation: '' })
    }
    handleForm = event => {
        event.preventDefault();
        if (this.state.currentPassword === '') {
            NotificationManager.warning("Please Enter Current Password");
            return false;
        }
        if (this.state.changePassword && (this.state.password === '' || this.state.password_confirmation === '')) {
            NotificationManager.warning("Please Enter Password and Confirm Password");
            return false;
        } else if (this.state.changePassword && (this.state.password !== this.state.password_confirmation)) {
            NotificationManager.warning("Your Password Not Matched ! Please Check your pasword and confirm password");
            return false;
        }
        axios
            .put("http://localhost:9000/sellers/update", this.state)
            .then(result => {
                localStorage.setItem("user", JSON.stringify(result.data.updatedData));
                if (result.data.success) NotificationManager.success(result.data.msg);
            })
            .catch(error => {
                this.setState({ errors: error })
                if (error.response && error.response.status === 401)
                    NotificationManager.error(error.response.data.msg);
                else
                    NotificationManager.error("Something Went Wrong");
            });
    }
    render() {
        return (
            <Fragment>
                <NotificationContainer />
                {this.props.loggedIn ?
                    <div className="modal" id="myModal" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <form onSubmit={this.handleForm}  >
                                    <div className="modal-header">
                                        <h4 className="modal-title">Update User Details</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">

                                        <div className="row">
                                            <div className="col-sm-6" >
                                                <div className="form-group">
                                                    <label >Name</label>
                                                    <input type="text" className="form-control" placeholder="Name" name="name" onChange={this.handleInput} value={JSON.parse(localStorage.getItem('user')).name} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6" >
                                                <div className="form-group">
                                                    <label >Email</label>
                                                    <input type="email" className="form-control" name="email" value={JSON.parse(localStorage.getItem('user')).email} onChange={this.handleInput} placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6" >
                                                <div className="form-group">
                                                    <label >Current Password</label>
                                                    <input type="password" className="form-control" required name="currentPassword" value={this.state.currentPassword} onChange={this.handleInput} placeholder="Current Password" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6" >
                                                <div className="form-group">
                                                    <label htmlFor='changePassword'>Want To change Password?</label><br />
                                                    <Toggle
                                                        name="changePassword"
                                                        id='changePassword'
                                                        defaultChecked={this.state.changePassword}
                                                        onChange={this.handleToggleInput} />
                                                </div>
                                            </div>
                                            {this.state.changePassword ? (
                                                <React.Fragment>
                                                    <div className="col-sm-6" >
                                                        <div className="form-group">
                                                            <label >New Password</label>
                                                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInput} placeholder="New Password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6" >
                                                        <div className="form-group">
                                                            <label >Confirm Password</label>
                                                            <input type="password" className="form-control" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleInput} placeholder="Confirm New Password" />
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            ) : null}


                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn mb-2" style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', color: "white", }}>
                                            <nav className="nav-link" style={{ padding: '3px' }}>
                                                Submit</nav>
                                        </button>
                                        <button className="btn mb-2" data-dismiss="modal" style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', color: "white", }}>
                                            <nav className="nav-link" style={{ padding: '3px' }}>
                                                Close</nav>
                                        </button>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>: null}
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
    };
};

const mapStateToProps = state => {
    if (state.auth.loggedIn && state.auth.user) {

        return {
            loggedIn: state.auth.loggedIn
        };
    }
    else {
        return {};
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserModal);