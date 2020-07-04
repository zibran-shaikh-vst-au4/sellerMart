
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {

    render() {
        return (

            <div id="contact" >

                <img className="shared-image"
                    style={{ maxWidth: '100%' }}
                    src="../img/34.jpg">

                </img>

                <div data-aos="fade-left"className="container contact-page justify-center mt-2 mb-5" id="box">

                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-phone" aria-hidden='true'> </i>
                        </div>
                        <div className="content">
                           
                            <p>+91 98200 46711 </p>
                            <p> +91 98920 09454</p>

                        </div>

                    </div>

                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-map-marker" aria-hidden='true'> </i>
                        </div>
                        <div className="content">
                            
                            <p> VENGURLEKARS CHAITRA
                                        BLDG-26
                                        OPP ANDHERI SPORT COMPLEX
                                        AZAD NAGAR
                                        JP ROAD
                                        ANDHERI (W)
                                    MUMBAI 53.</p>

                        </div>
                    </div>
                    <div className="box ">
                        <div className="icon">
                            <i className="fa fa-envelope-o " aria-hidden='true' > </i>
                        </div>
                        <div className="content">
                            
                            <p>info@vengurlekars.net</p>

                        </div>

                    </div>



                </div>
                <div className="container ">
                    <div className="container-iframes">
                        <iframe className="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.479110920711!2d72.83291861405456!3d19.1304940552306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b714d2555ba7%3A0x6921bec675b097b0!2sVENGURLEKARS%20SHREESAI%20BUILDERS%20AND%20DEVELOPERS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1592774063998!5m2!1sen!2sin"
                            frameBorder="0"
                        ></iframe>

                    </div>
                </div>

                <div data-aos="fade-right"className="container mt-5">
                    <div className="row" style={{width:"100%"}}>
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">

                            <div className="section-title">

                                <h3>Get In Touch</h3>
                                {/* <h5>Please fill out the form below to send us an email and we will get back to you as soon as possible.</h5> */}
                            </ div>
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