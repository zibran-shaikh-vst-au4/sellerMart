import React, { Component } from 'react'

class Projects extends Component {
    render() {
        return (
            <div id="project">
                <img className="shared-image"
                    style={{ maxWidth: '100%' }}
                    src="../img/34.jpg"> 

                </img>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-xs-12 col-sm-12 col-md-6"> <img src="img/day view.jpg" className="img-responsive " id="img-project" /> </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="project-text">
                                <h4>Projects</h4>
                                <p className="text-justify">
                                    Presenting Vengurlekars Chaitra, exclusive living in a world-class gated community, near Andheri Sports Complex, minutes from the airport and Azad nagar metro station, and a short drive from BKC.The Art Deco buildings have thoughtfully planned 2 and 3 bedroom residences.

                                    These lavish homes come with the most superior internal finishes. The grand clubhouse includes a fully equipped gym, heated indoor pool and much more. A spectacular landscape spread over 100,000 sq. ft. includes Mumbai’s first private treetop walkway, multiple swimming pools and more. With all this at your disposal, you’ll agree, this truly is celebrity living.
                                </p>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
