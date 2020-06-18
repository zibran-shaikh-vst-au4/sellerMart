import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 intro-text">
                                    <h1>Building Home Bonding Heart<span></span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
                                    <NavLink to="/feature"><a className="btn btn-custom btn-lg page-scroll">Learn More</a></NavLink></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="section-title text-center">
                            <h2>About Us</h2>
                            <p>From well-crafted residences to avant-garde commercial spaces, Vengurlekars has always delivered state-of-the-art construction that illustrates a blend between traditional and ultra-modern concepts. While Vengurlekars completely ensures safety, advanced use of technology and new-fashioned themes, we also keep a greater balance with nature and greens.
The inception of Vengurlekars is an outcome from 30 years of first hand onfield & consulting experience earned by its very principal founders. Reputed Ex-serviceman, Mr. Vijay Moreshwar Vengurlekar (Director) accompanied by Ashwini Madhukar Katkar (Director) to form the very pillars of this organization. We are today considered as one of the most innovative developers and builders in Mumbai/India. Having served some of the most prestigious clientele, our founders know exactly how and what can best fit your interest.</p>
                            <NavLink to="/about"><a className="btn btn-custom btn-lg page-scroll">Read More</a></NavLink>
                        </div>
                    </div>
                </div>
                <div id="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6"> <img src="img/project.jpg" className="img-responsive" alt="" /> </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="project-text">
                                    <h2>Projects</h2>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

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
                                            <p><span><i className="fa fa-envelope-o"></i> Email</span>info@vengurlekars.net</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="testimonials">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>What our clients say</h2>
                        </div>
                        <div className="row">


                            <div className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image"> <img src="img/testimonials/01.jpg" alt="" /> </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at</p>
                                        <div className="testimonial-meta"> - John Doe </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image"> <img src="img/testimonials/02.jpg" alt="" /> </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                                        <div className="testimonial-meta"> - John Doe </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image"> <img src="img/testimonials/03.jpg" alt="" /> </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                                        <div className="testimonial-meta"> - John Doe </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image"> <img src="img/testimonials/04.jpg" alt="" /> </div>
                                    <div className="testimonial-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                                        <div className="testimonial-meta"> - John Doe </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image"> <img src="img/testimonials/05.jpg" alt="" /> </div>
                                    <div className="testimonial-content">
                                        <p>"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\""</p>
                                        <div className="testimonial-meta"> - John Doe </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image"> <img src="img/testimonials/06.jpg" alt="" /> </div>
                                    <div className="testimonial-content">
                                        <p>"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\""</p>
                                        <div className="testimonial-meta"> - John Doe </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
