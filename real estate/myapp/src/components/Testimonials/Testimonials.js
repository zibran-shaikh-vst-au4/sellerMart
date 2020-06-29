import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Testimonials extends Component {
    render() {
        return (
            <div id="testimonial">
                <div className="container-fluid mt-4">
                    <Carousel>
                        <Carousel.Item className="text-center">
                            <div className="img-box border rounded-circle m-auto">
                                <img
                                    className="d-block w-100 rounded-circle"
                                    src="../img/team/04.jpg"

                                />
                            </div>


                            <h5 className="py-1 my-1" style={{ color: '#D0A24C' }}>first testimonial</h5>
                            <p className="pt-3 " style={{ color: '#D0A24C', fontSize: '12px' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                        </Carousel.Item>
                        <Carousel.Item className="text-center">
                            <div className="img-box border rounded-circle m-auto">
                                <img
                                    className="d-block w-100 rounded-circle"
                                    src="../img/team/03.jpg"

                                />
                            </div>


                            <h5 className="py-1 my-1" style={{ color: '#D0A24C' }}>second testimonial</h5>
                            <p className="pt-3 " style={{ color: '#D0A24C', fontSize: '12px' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                        </Carousel.Item>
                        <Carousel.Item className="text-center">
                            <div className="img-box border rounded-circle m-auto">
                                <img
                                    className="d-block w-100 rounded-circle"
                                    src="../img/team/02.jpg"

                                />
                            </div>


                            <h5 className="py-1 my-1" style={{ color: '#D0A24C' }}>third testimonial</h5>
                            <p className="pt-3 " style={{ color: '#D0A24C', fontSize: '12px' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                        </Carousel.Item>
                    </Carousel>
                </div>


            </div >
        )
    }
}

export default Testimonials;
