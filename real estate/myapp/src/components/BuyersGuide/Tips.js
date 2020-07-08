import React, { Component } from 'react'

class Tips extends Component {
    render() {
        return (
            <div id="faqs">
                <img className="shared-image" src="https://res.cloudinary.com/uploadfiles/image/upload/v1594210709/rsz_34_bbzq43.jpg" alt="images for tips" style={{ maxWidth: '100%' }} />
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-xs-12 col-md-12">
                            <div className="faqs-text">
                                <div className="section-title text-center">
                                    <h3>Buying Tips</h3>
                                    <p className="about-para">The first step towards buying a property starts from being able to identify the one that suits your needs and fits your budget. It is important to select the property depending on following criteria:</p>

                                    <details data-aos="fade-up" style={{ textAlign: 'left' }}>
                                        <summary className="text-justify about-para" style={{ textAlign: 'left', color: '#D0A24C' }}>Location of site</summary>
                                        <p className="about-para"> While choosing the location, you need to keep the following parameters in mind like proximity to the main roads, bus stops, railway lines, transportation services, civic amenities like educational institutions, park, police station, temples, community hall, hospitals, and auditorium within reach.</p>
                                    </details>

                                    <details data-aos="fade-up" style={{ textAlign: 'left' }}>
                                        <summary className="text-justify about-para" style={{ textAlign: 'left', color: '#D0A24C' }}>Affordability</summary>
                                        <p className="about-para">  Does the location fit your budget?</p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tips
