import React, { useEffect, Fragment } from 'react'
import Testimonials from '../Testimonials/Testimonials'
import "animate.css";
import Plans from "../planMap/plan";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {

    

    return (
        <Fragment>

            <header id="header">

                <div className="intro">
                    <div className="overlay">

                        <Carousel>

                            <Carousel.Item className="animate__animated animate__flip animate__delay-2s">
                                <img
                                    className="d-block w-100"
                                    src="/img/terrace view.jpg"
                                    alt="First slide"
                                    height='100%'
                                />
                                <Carousel.Caption className="animate__animated animate__lightSpeedInLeft animate__delay-2s">

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="animate__animated animate__flipInY ">
                                <img
                                    className="d-block w-100"
                                    src="/img/compound walls views.jpg"
                                    height='100%'
                                />

                                <Carousel.Caption className="animate__animated animate__flipInY animate__delay-2s">

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>

                <div id="home-aboutus-img">

                    <div className="container" >
                        <div className="row mt-5 mb-5">
                            <div className="section-title text-center">
                                <h3 className="m-auto pb-2">ABOUT US</h3>
                                <p  className="about-para col-sm-12 col-md-12 text-center mt-2" data-aos="fade-up">
                                    From well-crafted residences to avant-garde commercial spaces, Vengurlekars has always delivered state-of-the-art construction that illustrates a blend between traditional and ultra-modern concepts. While Vengurlekars completely ensures safety, advanced use of technology and new-fashioned themes, we also keep a greater balance with nature and greens.
                                    The inception of Vengurlekars is an outcome from 30 years of first hand onfield & consulting experience earned by its very principal founders. Reputed Ex-serviceman, Mr. Vijay Moreshwar Vengurlekar (Director) accompanied by Ashwini Madhukar Katkar (Director) to form the very pillars of this organization. We are today considered as one of the most innovative developers and builders in Mumbai/India. Having served some of the most prestigious clientele, our founders know exactly how and what can best fit your interest.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="project-home">
                    <h4 className="pb-2 text-center mt-2">PROJECTS</h4>
                    <div className="container">
                        <div className="row mb-5">

                            <div data-aos="fade-right" className="col-xs-12 col-sm-12 col-md-6"><img src="img/day view.jpg" className="img-responsive" id="img-project-home" /></div>
                            <div  data-aos="fade-left" className="col-xs-12 col-sm-12 col-md-6">
                                <div className="project-text">
                                    <p className="mt-2 mb-2" style={{ fontSize: '16px' }}><li>Vengurlekars Chaitra</li> </p>
                                    <p className="text-justify">"Presenting Vengurlekars Chaitra, exclusive living in a world-class gated community, near Andheri Sports Complex, minutes from the airport and Azad nagar metro station, and a short drive from BKC.The Art Deco buildings have thoughtfully planned 2 and 3 bedroom residences.
                                    These lavish homes come with the most superior internal finishes. With all this at your disposal, you’ll agree, this truly is celebrity living."</p>
                                    <Plans />
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