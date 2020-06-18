import React, { Component } from 'react'

class Tips extends Component {
    render() {
        return (
            <div id="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-12">
                            <div className="faqs-text">
                                <div className="section-title text-center">
                                    <h2>Buying Tips</h2>
                                    <p>The first step towards buying a property starts from being able to identify the one that suits your needs and fits your budget. It is important to select the property depending on following criteria:</p>

                                    <details style={{ textAlign: 'left' }}>
                                        <summary style={{ textAlign: 'left', color: '#cabe9f' }}>Location of site</summary>
                                        While choosing the location, you need to keep the following parameters in mind like proximity to the main roads, bus stops, railway lines, transportation services, civic amenities like educational institutions, park, police station, temples, community hall, hospitals, and auditorium within reach.
</details>

                                    <details style={{ textAlign: 'left' }}>
                                        <summary style={{ textAlign: 'left', color: '#cabe9f' }}>Affordability</summary>
                                        Does the location fit your budget?
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
