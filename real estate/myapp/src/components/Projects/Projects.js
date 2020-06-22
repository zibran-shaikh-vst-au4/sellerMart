import React, { Component } from 'react'

class Projects extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div id="project">
                <img className="shared-image"
                    style={{ maxWidth: '100%', minHeight: '300px' }}
                    src="https://demo2wpopal.b-cdn.net/maisonco/wp-content/uploads/2018/12/bg-breadcrumb.jpg">

                </img>
                <div className="container">
                    <div className="row" style={{marginTop:'100px'}}>
                        <div className="col-xs-12 col-md-6"> <img src="img/project.jpg" className="img-responsive " id="img-project" /> </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="project-text">
                                <h2>Projects</h2>
                                <p className="text-justify">
                                    Presenting Vengurlekars Chaitra, exclusive living in a world-class gated community, near Andheri Sports Complex, minutes from the airport and Azad nagar metro station, and a short drive from BKC.The Art Deco buildings have thoughtfully planned 2 and 3 bedroom residences.

                                    These lavish homes come with the most superior internal finishes. The grand clubhouse includes a fully equipped gym, heated indoor pool and much more. A spectacular landscape spread over 100,000 sq. ft. includes Mumbai’s first private treetop walkway, multiple swimming pools and more. With all this at your disposal, you’ll agree, this truly is celebrity living.
                                </p>

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
                                        <p><span><i className="fa fa-envelope-o"></i> Email </span>info@vengurlekars.net</p>
                                    </div>
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
