import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {

    render() {
        return (
            <div>
                <div id="contact" style={{ background: '#3f4448', paddingTop: '40px' }}>
                    <div className="container">
                        <div className="col-md-3">
                            <div className="row" style={{ margin: '0px' }}>
                                <div className="section-title">
                                    <img src="img/logo.png" width="80%" />
                                    <div className="social">
                                        <ul>
                                            <li><a href="https://www.facebook.com/Vengurlekarsdevelopers/"><i className="fa fa-facebook" style={{ width: '45px' }}></i></a></li>
                                            <li><a href="https://twitter.com/vengurlekars_01"><i className="fa fa-twitter" style={{ width: '45px' }}></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/vengurlekars-developers/?viewAsMember=true"><i className="fa fa-linkedin-square" style={{ width: '45px' }}></i></a></li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row" style={{ margin: '0px' }}>
                                <div className="section-title">
                                    <h2 style={{ color: '#cabe9f' }}>Link</h2>
                                    <div>
                                        <ul>
                                            <li><NavLink to="/home"><span style={{ fontSize: '25px', color: 'white' }}>Home</span></NavLink></li>
                                            <li><NavLink to="/about"><span style={{ fontSize: '25px', color: 'white' }}>About</span></NavLink></li>
                                            <li><NavLink to="/corevalues"><span style={{ fontSize: '25px', color: 'white' }}>Corevalues</span></NavLink></li>
                                            <li><NavLink to="/projects"><span style={{ fontSize: '25px', color: 'white' }}>Projects</span></NavLink></li>
                                            <li><NavLink to="/contact"><span style={{ fontSize: '25px', color: 'white' }}>Contact</span></NavLink></li>


                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row" style={{ margin: '0px' }}>
                                <div className="section-title">
                                    <h2 style={{ color: '#cabe9f' }}>About Us</h2>
                                    <p className="text-justify">Today, lifestyles echoes the canons achieved. Emancipated by tradition, convention or doctrines, the present-day world order is modern-day lifestyle and only the superlative fits the bill.</p>
                                    <p><span><i class="fa fa-map-marker"></i></span> Google Map For Location</p>
                                </div>


                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="section-title">
                                <h2 style={{ color: '#cabe9f' }}>Address</h2>
                            </div>
                            <div className="contact-item">
                                <p><span><i className="fa fa-map-marker"></i></span>VENGURLEKARS CHAITRA
BUILDING NO. 26 OPP ANDHERI SPORT COMPLEX VIP GATE (NO 3) AZAD NAGAR JP ROAD ANDHERI WEST MUMBAI 400053</p>
                            </div>
                            <div className="contact-item">
                                <p><span><i className="fa fa-phone"></i></span> +91 98200 46711, +91 98920 09454</p>
                            </div>
                            <div className="contact-item">
                                <p><span><i className="fa fa-envelope-o"></i></span>info@vengurlekars.net</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <p>&copy; 2020 Vengurlekars . All Rights Reserved. Design & Developed By <a href="" rel="nofollow">Vengurlekars</a></p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer
