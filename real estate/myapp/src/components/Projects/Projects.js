import React, { Component } from 'react'

class Projects extends Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div id="project">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6"> <img src="img/project.jpg" className="img-responsive" alt="" /> </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="project-text">
                                <h2>Projects</h2>
                                <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

                                <div className="contact-info">
                                    <div className="contact-item">
                                        <h3>Contact Info</h3>
                                        <p><span><i className="fa fa-map-marker"></i> Address</span>VENGURLEKARS CHAITRA
                                        BUILDING NO. 26 OPP ANDHERI SPORT COMPLEX VIP GATE (NO 3) AZAD NAGAR JP ROAD ANDHERI WEST MUMBAI 400053</p>
                                    </div>
                                    <div className="contact-item">
                                        <p><span><i className="fa fa-phone"></i> Phone</span> +91 98200 46711, +91 98920 09454</p>
                                    </div>
                                    <div className="contact-item">
                                        <p><span><i className="fa fa-envelope-o"></i> Email </span>info@vengurlekars.net</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
