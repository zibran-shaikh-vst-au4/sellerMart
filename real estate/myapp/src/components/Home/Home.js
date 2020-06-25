import React, { useEffect, Fragment } from 'react'
import Testimonials from '../Testimonials/Testimonials'
import "animate.css";
import Aos from 'aos';
import 'aos/dist/aos.css'


import Carousel from 'react-bootstrap/Carousel'


const Home = () => {

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])

    return (
        <Fragment>

            <header id="header">

                <div className="intro">
                    <div className="overlay">

                        <Carousel>

                            <Carousel.Item className="animate__animated animate__flip">
                                <img
                                    className="d-block w-100"
                                    src="../img/85.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption className="animate__animated animate__lightSpeedInLeft animate__delay-2s">
                                    {/*  <h3>BUILDING HOME</h3>
                                        <h3>BONDING HEART</h3> */}
                                    {/*  <button className="btn btn-lg">Read More</button> */}

                                    {/*  <p className="carousel-para">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="animate__animated animate__flipInY">
                                <img
                                    className="d-block w-100"
                                    src="../img/65455.jpg"

                                />

                                <Carousel.Caption className="animate__animated animate__flipInY animate__delay-2s">

                                    {/*  <h1>INTRODUCING VENGURLEKARS</h1>
                                        <h3>CHAITRA</h3> */}
                                    {/*  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            {/* <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="../img/banner-2.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption >
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item> */}
                        </Carousel>

                    </div>
                </div>





                <div style={{ backgroundImage: 'url(https://demo2wpopal.b-cdn.net/maisonco/wp-content/uploads/2019/05/landing_bg1.png)', backgroundSize: 'cover', height: 700 }}>

                    <div className="container" >
                        <div className="row" style={{ paddingTop: 150 }}>


                            <div className="section-title text-center">
                                <h2 className="m-auto pb-2" style={{ borderBottom: '4px solid #D0A24C', width: '80px' }}>AboutUs</h2>
                                <p data-aos ="fade-up" className="about-para col-sm-12 col-md-12 text-center mt-5">
                                    From well-crafted residences to avant-garde commercial spaces, Vengurlekars has always delivered state-of-the-art construction that illustrates a blend between traditional and ultra-modern concepts. While Vengurlekars completely ensures safety, advanced use of technology and new-fashioned themes, we also keep a greater balance with nature and greens.
                                    The inception of Vengurlekars is an outcome from 30 years of first hand onfield & consulting experience earned by its very principal founders. Reputed Ex-serviceman, Mr. Vijay Moreshwar Vengurlekar (Director) accompanied by Ashwini Madhukar Katkar (Director) to form the very pillars of this organization. We are today considered as one of the most innovative developers and builders in Mumbai/India. Having served some of the most prestigious clientele, our founders know exactly how and what can best fit your interest.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="project" style={{ backgroundImage: 'url(https://demo2wpopal.b-cdn.net/maisonco/wp-content/uploads/2019/05/landing_bg2.png)', backgroundSize: 'cover', backgroundColor: "#231f20", height: 1000 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 " > <img src="img/project.jpg" className="img-responsive" id="img-project" style={{ boxShadow: '10px 10px 5px grey' }} /> </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="project-text">
                                    <h2 style={{ color: '#FFFFFF' }}>Projects</h2>
                                    <p className="text-justify">"Presenting Vengurlekars Chaitra, exclusive living in a world-class gated community, near Andheri Sports Complex, minutes from the airport and Azad nagar metro station, and a short drive from BKC.The Art Deco buildings have thoughtfully planned 2 and 3 bedroom residences.

These lavish homes come with the most superior internal finishes. With all this at your disposal, you’ll agree, this truly is celebrity living."</p>

                                    <div className="contact-info">
                                        <div className="contact-item">
                                            <h3>Contact Info</h3>
                                            <p><span><i className="fa fa-map-marker"></i> Address : </span>VENGURLEKARS CHAITRA
                                    BUILDING NO. 26 OPP ANDHERI SPORT COMPLEX VIP GATE (NO 3) AZAD NAGAR JP ROAD ANDHERI WEST MUMBAI 400053</p>
                                        </div>
                                        <div className="contact-item">
                                            <p><span><i className="fa fa-phone"></i> Phone :</span> +91 98200 46711, +91 98920 09454</p>
                                        </div>
                                        <div className="contact-item">
                                            <p><span><i className="fa fa-envelope-o"></i> Email :</span>info@vengurlekars.net</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonials />

            </header >
        </Fragment >
    )

}

export default Home
