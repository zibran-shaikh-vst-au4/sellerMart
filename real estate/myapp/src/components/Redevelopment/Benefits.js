import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap';

// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';

class Benefits extends Component {
    render() {
        return (
            <div id="about">
               <img className="shared-image"
                    style={{ maxWidth: '100%'}}
                    src="../img/34.jpg">

                </img>
                <div className="container">
                    <div className="row" style={{ margin: '100px' }}>
                        {/* <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt="" /> </div> */}
                        <div className="col-xs-12 col-md-12">
                            <div className="about-text">
                                <div className="section-title text-center">
                                    <h3>Benefits of Redevelopment</h3>
                                    <h4 className="mt-5" style={{ textAlign: 'left' }}>Benefits of redevelopment, to developers and tenants</h4>
                                    <p className="text-justify about-para">Builders/ developers, who opt to purchase land and develop the same, incur huge stamp duty cost, vis-vis transfer of the land. However, when it comes to redevelopment of old buildings, the stamp duty is reduced by a significant extent and this acts as a major benefit for developers.

                                    Tenants too get several benefits like hassle-free execution, extra carpet area, corpus fund, upmarket amenities and hi-tech gadgets such as cctv’s, intercom / video door phone systems, smoke detectors, fire fighting alarm systems, borewell with rain water harvesting system, high end elevators, society office if permissible, earthquake resistant and well planned apartments and alternate accommodation or rent compensation, for the period during which the building is under construction.

                                    Most importantly, there is a substantial increase in the flat’s value and low maintenance costs post redevelopment. If any of the family / members require additional area in the same redeveloped building, it can be achieved by purchasing it from the developer and hence would enable the family to live in together.

Redeveloped building can withstand with the new climatic and geographic conditions and is constructed with latest safety measures.</p>
                                    <h4 className="mt-5" style={{ textAlign: 'left' }}>The need for redevelopment, in Mumbai</h4>
                                    <p className="text-justify about-para">There is huge potential for redevelopment, in Mumbai, due to the constraints on land availability, coupled with the mismatch between demand and supply of housing stock. On the other hand, there are thousands of ageing buildings where it may not be viable to carry out structural repairs. The only solution is to pull them down and reconstruct them. The problem of dilapidated buildings in the city of Mumbai is becoming more acute, with each passing year. Consequently, for a majority of the cities in India, redevelopment of old buildings becomes crucial.

With the mid-income segment today becoming a huge purchasing market, developers are moving towards redeveloping older structures into modern luxurious buildings with facilities like sufficient parking, open areas. In the ultimate analysis, complete and timely delivery seems to be the most crucial factor, when it comes to redevelopment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefits
