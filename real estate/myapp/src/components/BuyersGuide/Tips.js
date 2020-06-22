import React, { Component } from 'react'

class Tips extends Component {
    render() {
        return (
            <div id="faqs">
                <img className="shared-image"
                    style={{ maxWidth: '100%', minHeight: '300px' }}
                    src="https://demo2wpopal.b-cdn.net/maisonco/wp-content/uploads/2018/12/bg-breadcrumb.jpg">

                </img>
                <div className="container">
                    <div className="row"  style={{ margin: '100px' }}>
                        <div className="col-xs-12 col-md-12">
                            <div className="faqs-text">
                                <div className="section-title text-center">
                                    <h2>Buying Tips</h2>
                                    <h3>The first step towards buying a property starts from being able to identify the one that suits your needs and fits your budget. It is important to select the property depending on following criteria:</h3>

                                    <details style={{ textAlign: 'left' }}>
                                        <summary className="text-justify about-para" style={{ textAlign: 'left', color: '#cabe9f' }}>Location of site</summary>
                                       <p className="about-para"> While choosing the location, you need to keep the following parameters in mind like proximity to the main roads, bus stops, railway lines, transportation services, civic amenities like educational institutions, park, police station, temples, community hall, hospitals, and auditorium within reach.</p>
</details>

                                    <details style={{ textAlign: 'left' }}>
                                        <summary className="text-justify about-para" style={{ textAlign: 'left', color: '#cabe9f' }}>Affordability</summary>
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
