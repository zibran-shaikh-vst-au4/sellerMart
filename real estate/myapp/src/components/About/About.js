import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap';

// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';

class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt="" /> </div> */}
                        <div className="col-xs-12 col-md-12">
                            <div className="about-text">
                                <div className="section-title text-center">
                                    <h2>About Us</h2>
                                    <p className="text-justify">From well-crafted residences to avant-garde commercial spaces, Vengurlekars has always delivered state-of-the-art construction that illustrates a blend between traditional and ultra-modern concepts. While Vengurlekars completely ensures safety, advanced use of technology and new-fashioned themes, we also keep a greater balance with nature and greens.
The inception of Vengurlekars is an outcome from 30 years of first hand onfield & consulting experience earned by its very principal founders. Reputed Ex-serviceman, Mr. Vijay Moreshwar Vengurlekar (Director) accompanied by Ashwini Madhukar Katkar (Director) to form the very pillars of this organization. We are today considered as one of the most innovative developers and builders in Mumbai/India. Having served some of the most prestigious clientele, our founders know exactly how and what can best fit your interest.</p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
