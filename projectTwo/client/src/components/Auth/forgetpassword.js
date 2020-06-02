import React, { Component } from 'react';
import axios from 'axios';
/* import { NavLink } from "react-router-dom"; */
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk} from '@fortawesome/free-solid-svg-icons';

class forgetpassword extends Component {
    state = { email: "", errors: {} };


    handleInput = e => {
        e.preventDefault();
        const { name, value } = e.target
        this.setState({ [name]: value });
    }
    handleForm = e => {
        e.preventDefault();
        if (this.state.email === '') {
            NotificationManager.warning("Email is Required");
            return false;
        }
        const data = { email: this.state.email };
        axios
            .post("http://localhost:9000/sellers/reset", data)
            .then(result => {
                NotificationManager.success("Password Reset link sent to yout email .Please check the your email.Link Will be Valid For 30 min");
            })
            .catch(err => {
                if (err.response && err.response.status === 404)
                    NotificationManager.error(err.response.data.msg);
                else
                    NotificationManager.error("Something Went Wrong");
                this.setState({ errors: err.response })
            });

    }
    render() {
        return (
            <div className="content" style={{ marginTop: '15vh' }}>
                <NotificationContainer />
                <form onSubmit={this.handleForm}>
                  
                    <div className="card shadow m-auto w-25" >
                        <div className="font-weight-bold text-center mt-2" style={{ fontSize: 20 }}>Forgot Password</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleInput} className="form-control" />
                            </div>
                        </div>
                        <div className="text-center mb-2">
                        <button type="submit" className="btn mb-2"  style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', color:"white",  }}><nav className="nav-link" style={{ padding: '3px' }}><FontAwesomeIcon icon={faMailBulk} style={{ fontSize: '1em', marginRight: '5px' }}/>Send Mail</nav></button>
                            {/* <button classname="btn btn-sm" style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', marginLeft: '10px' }}><NavLink to="/login" className="nav-link" style={{ padding: '3px' }}><FontAwesomeIcon icon={faSignInAlt} style={{ fontSize: '1em', marginRight: '5px' }} /> back to login</NavLink></button> */}
                        </div>
                    </div>
                    {/* </div>
                        <div className="col-sm-2"></div>
                    </div> */}
                </form>
            </div>
        )
    }
}
export default forgetpassword;