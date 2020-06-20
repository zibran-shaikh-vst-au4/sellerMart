import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    
    render() {
        return (
            <div>
                <div id="contact">
                    <div className="container">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="section-title">
                                    <h2>Get In Touch</h2>
                                    <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                                </div>
                                <form name="sentMessage" id="contactForm" noValidate>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="subject" id="subject" className="form-control" placeholder="Subject" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                                </form>

                            </div>
                        </div>
                        <div className="col-md-3 col-md-offset-1 contact-info">
                            <div className="contact-item">
                                <h3>Contact Info</h3>
                                <p><span><i className="fa fa-map-marker"></i> Address</span>VENGURLEKARS CHAITRA
BUILDING NO. 26 OPP ANDHERI SPORT COMPLEX VIP GATE (NO 3) AZAD NAGAR JP ROAD ANDHERI WEST MUMBAI 400053</p>
                            </div>
                            <div className="contact-item">
                                <p><span><i className="fa fa-phone"></i> Phone</span> +91 98200 46711, +91 98920 09454</p>
                            </div>
                            <div className="contact-item">
                                <p><span><i className="fa fa-envelope-o"></i> Email</span>info@vengurlekars.net</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Contact
