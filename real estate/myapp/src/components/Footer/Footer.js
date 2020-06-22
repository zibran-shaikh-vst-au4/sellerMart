import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <div className="container  mt-5 text-center">
                    <div className="row">
                        <div className="col-md-12" style={{ color: 'white' }}>
                            <h1 className="display-5  " style={{ fontFamily: 'Marcellus SC,serif' }}>ARE YOU INTERESTED</h1>
                            <h1 className="display-4 " style={{ fontFamily: 'Marcellus SC,serif' }}>IT'S TIME TO DISCOVER</h1>
                            <h1 className="display-5 " style={{ fontFamily: 'Marcellus SC,serif' }}>VENGURLEKARS CHAITRA</h1>
                        </div>
                    </div>
                </div>




                <div id="contact" style={{ background: '#3f4448', paddingTop: '40px' }}>
                    <div className="container-fluid" >
                        <div className="row offset-md-1">
                            <div className="col-md-2">

                                <div className="section-title ">
                                    <h2 style={{ color: '#cabe9f' }}>Link</h2>
                                    <div>
                                        <ul>
                                            <li><a href="/home"><span style={{ fontSize: '25px', color: 'white' }}>Home</span></a></li>
                                            <li><a href="/about"><span style={{ fontSize: '25px', color: 'white' }}>About</span></a></li>
                                            <li><a href="/corevalues"><span style={{ fontSize: '25px', color: 'white' }}>Corevalues</span></a></li>
                                            <li><a href="/projects"><span style={{ fontSize: '25px', color: 'white' }}>Projects</span></a></li>
                                            <li><a href="/contact"><span style={{ fontSize: '25px', color: 'white' }}>Contact</span></a></li>

                                        </ul>
                                    </div>
                                </div>



                            </div>

                            <div className="col-md-4">

                                <div className="section-title">
                                    <h2 style={{ color: '#cabe9f' }}>About Us</h2>
                                    <p className="pr-5">Today, lifestyles echoes the canons achieved. Emancipated by tradition, convention or doctrines, the present-day world order is modern-day lifestyle and only the superlative fits the bill.</p>
                                    <p><span><i class="fa fa-map-marker"></i></span> Google Map For Location</p>
                                </div>


                            </div>


                            <div className="col-md-4">

                                <div className="section-title">
                                    <h2 style={{ color: '#cabe9f' }}>Address</h2>


                                    <p><span><i className="fa fa-map-marker mr-2"></i>
                                    </span>VENGURLEKARS CHAITRA
                                        BUILDING NO. 26 OPP ANDHERI SPORT COMPLEX VIP GATE (NO 3)
                                        AZAD NAGAR JP ROAD ANDHERI WEST MUMBAI 400053</p>

                                    <div className="contact-item">
                                        <p><span><i className="fa fa-phone"></i></span>+91 98200 46711, +91 98920 09454</p>
                                    </div>
                                    <div className="contact-item">
                                        <p><span><i className="fa fa-envelope-o"></i></span>info@vengurlekars.net</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container text-center">
                        <p>&copy; 2020 Vengurlekars . All Rights Reserved. Design & Developed By <a href="" rel="nofollow">Vengurlekars</a></p>
                        <div >
                            <a className="p-2"> <i className="fa fa-facebook fa-2x"></i></a>
                            <a className="p-2"> <i className="fa fa-twitter fa-2x"></i></a>
                            <a className="p-2"> <i className="fa fa-instagram fa-2x"></i></a>
                            <a className="p-2"> <i className="fa fa-whatsapp fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default Footer
