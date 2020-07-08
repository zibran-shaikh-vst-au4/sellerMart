import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Projects extends Component {
    render() {
        return (
            <div id="project">
                <img className="shared-image"
                    style={{ maxWidth: '100%' }}
                    src="https://res.cloudinary.com/uploadfiles/image/upload/v1594210709/rsz_34_bbzq43.jpg">

                </img>

                <div className="container">
                    <h4 className="pb-2 text-center mt-5">PROJECTS</h4>
                    <div className="row  mb-5">

                        <div data-aos="fade-right" className="col-xs-12 col-sm-12 col-md-6"> <img src="https://res.cloudinary.com/uploadfiles/image/upload/v1594209025/day_view_aco0gh.jpg" className="img-responsive " id="img-project" /> </div>
                        <div data-aos="fade-left" className="col-xs-12 col-sm-12 col-md-6">
                            <div className="project-text">
                                <p className="mt-2 mb-2" style={{ fontSize: '16px' }}><li>Vengurlekars Chaitra</li></p>
                                <p className="text-justify">
                                    Presenting Vengurlekars Chaitra, exclusive living in a world-class gated community, near Andheri Sports Complex, minutes from the airport and Azad nagar metro station, and a short drive from BKC.The Art Deco buildings have thoughtfully planned 2 and 3 bedroom residences.

                                    These lavish homes come with the most superior internal finishes. The grand clubhouse includes a fully equipped gym, heated indoor pool and much more. A spectacular landscape spread over 100,000 sq. ft. includes Mumbai’s first private treetop walkway, multiple swimming pools and more. With all this at your disposal, you’ll agree, this truly is celebrity living.
                                </p>
                                <Carousel >

                                    <Carousel.Item  /* className="animate__animated animate__flip animate__delay-2s" */>
                                        <img
                                            style={{ borderRadius: '10px' }}
                                            className="d-block w-100"
                                            src="/img/2 bhk iso1.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption className="animate__animated animate__flipInY animate__delay-2s">
                                            <h5>2 BHK ISO VIEW</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item /* className="animate__animated animate__flipInY " */>
                                        <img
                                            style={{ borderRadius: '10px' }}
                                            className="d-block w-100"
                                            src="/img/2bhk iso2.jpg"
                                        />

                                        <Carousel.Caption className="animate__animated animate__flipInY animate__delay-2s">
                                            <h5>2 BHK ISO VIEW</h5>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item /* className="animate__animated animate__flipInY " */>
                                        <img
                                            className="d-block w-100"
                                            src="/img/3 bhk iso3.jpg"
                                            style={{ borderRadius: '10px' }}
                                        />

                                        <Carousel.Caption className="animate__animated animate__flipInY animate__delay-2s">
                                            <h5>3 BHK ISO VIEW</h5>

                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="mt-5">


                                    <a className="btn btn-md" style={{ color: '#D0A24C' }} href="/file/CHAITRA-CHSL.pdf" download>
                                        <i className="fa fa-download fa-2x mr-2" aria-hidden="true"></i> DOWNLOAD BROCHURE</a>


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
