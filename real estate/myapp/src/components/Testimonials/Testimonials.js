import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel'

class Testimonials extends Component {
    render() {
        return (
            <div id="testimonials">
                <div className="container ">
                     <div className="section-title text-center">
                        <h2>OUR TESTIOMONIALS</h2>
                    </div>
                    <div className="row mt-5 mb-5">


                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="testimonial card shadow">
                                
                                <div className="testimonial-content">
                                    <p>VengurlekarsGroup is always prompt, professional, extremely helpful and knowledgeable.</p>
                                    <div className="testimonial-meta"> - Shahil Shaikh </div>
                                    <div className="testimonial-meta ml-2"> Relationship Manager</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="testimonial card shadow">
                                {/* <div className="testimonial-image"> <img src="img/testimonials/02.jpg" alt="" /> </div> */}
                                <div className="testimonial-content">
                                    <p>VengurlekarsGroup – smart, intuitive, experienced and well organized – it is a true pleasure to work with such professionals. The results have been amazing.</p>
                                    <div className="testimonial-meta"> - Sagar Malvankar </div>
                                    <div className="testimonial-meta ml-2"> Project Manager </div>
                                </div>
                            </div>
                        </div>

                       




                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Testimonials;
