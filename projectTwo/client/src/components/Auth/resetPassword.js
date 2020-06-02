import React, { Component } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore} from '@fortawesome/free-solid-svg-icons'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class resetPassword extends Component {
    state = { linkDate: "", email: "", password: "", confirm_password: "", errors: {} };

    componentDidMount() {
        let slugParam = this.props.match.params.slug;
        let splitSlug = slugParam.split("+++");
        let reqDate = splitSlug[0];
        let email = splitSlug[1];
        console.log(reqDate);
        console.log(email);
        this.setState({ email: email, linkDate: reqDate });
        let date1 = new Date(reqDate);
        let currentDate = new Date();
        let differenceinMS = currentDate - date1
        if (differenceinMS > 3600000) {
            NotificationManager.error("Link Not Valid link will be valid for 15 min.Please sent the reset link Again");
            this.props.history.push("/login");
        }
    }
    handleInput = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleForm = e => {
        e.preventDefault();
        if (this.state.email === '') {
            NotificationManager.warning("Email is Required");
            return false;
        }
        // const data = { email: this.state.email, };
        // console.log(data)
        axios
            .post("http://localhost:9000/sellers/updatePassword", this.state)
            .then(result => {
                NotificationManager.success(result.data.msg);
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
                    <div className="row mt-5" >
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="card shadow">
                                <div className="font-weight-bold text-center mt-2" style={{ fontSize: 20 }}>Reset Password</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label >Confirm Password</label>
                                        <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInput} className="form-control" />
                                    </div>
                                </div>
                                <div className="text-center">
                                <button type="submit" className="btn mb-2"  style={{ backgroundColor: '#071e3d', borderRadius: '10px', border: 'initial', color:"white",  }}><nav className="nav-link" style={{ padding: '3px' }}><FontAwesomeIcon icon={faWindowRestore} style={{ fontSize: '1em', marginRight: '5px' }}/>Send Mail</nav></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </form>
            </div>
        )
    }
}
