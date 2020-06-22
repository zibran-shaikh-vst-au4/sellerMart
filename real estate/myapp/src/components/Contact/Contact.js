import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {

    render() {
        return (

            <div id="contact" >

                <img className="shared-image"
                    style={{ maxWidth: '100%', minHeight: '300px' }}
                    src="https://demo2wpopal.b-cdn.net/maisonco/wp-content/uploads/2018/12/bg-breadcrumb.jpg">

                </img>
                <div className="container-fluid">

                    <div className="row" style={{ margin: '100px' }}>
                        <div className="col-md-4  text-center contact-info">

                            <i className="fa fa-phone fa-5x"></i>
                            <h4 className="mt-5 ">PHONE : </h4><h4 >+91 98200 46711</h4> <h4 >+91 98920 09454</h4>


                        </div>
                        <div className="col-md-4 text-center contact-info mx-auto">

                            <i className="fa fa-map-marker fa-5x"></i>
                            <h4 className="mt-5">Address : </h4><h4 >VENGURLEKARS CHAITRA
BUILDING NO. 26 OPP ANDHERI SPORT COMPLEX VIP GATE (NO 3) AZAD NAGAR JP ROAD ANDHERI WEST MUMBAI 400053</h4>

                        </div>
                        <div className="col-md-4 text-center contact-info mx-auto">

                            <i className="fa fa-envelope-o fa-5x"></i>
                            <h4 className="mt-5 "> Email : </h4><h4 >info@vengurlekars.net</h4>

                        </div>
                    </div>

                </div>
                <div className="container-fluid "  >
                    <div className="row">
                        <div className="center-block" >
                            <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.479110920711!2d72.83291861405456!3d19.1304940552306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b714d2555ba7%3A0x6921bec675b097b0!2sVENGURLEKARS%20SHREESAI%20BUILDERS%20AND%20DEVELOPERS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1592774063998!5m2!1sen!2sin"
                                frameBorder="0" width="1690" height='300'
                            ></iframe>
                        </div>


                    </div>
                </div>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12 m-5 text-center">

                            <div className="section-title">

                                <h2>Get In Touch</h2>
                                <h4>Please fill out the form below to send us an email and we will get back to you as soon as possible.</h4>
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

                </div>
            </div>


        )
    }
}

export default Contact
