import React, { Component } from 'react'

class Faqs extends Component {
    render() {
        return (
            <div id="faqs">
                <img className="shared-image"
                    style={{ maxWidth: '100%' }}
                    src="../img/34.jpg">

                </img>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-xs-12 col-md-12">
                            <div className="faqs-text">
                                <div className="section-title text-center">
                                    <h3>Faqs</h3>
                                    <h3>As you buy a new home, these questions will answer all common queries about buying and owing a property in India. Use this guide to acquaint yourself with rules, laws and important information.</h3>

                                    <details className="text-justify mt-5">
                                        <summary className="text-justify about-para" style={{ color: '#D0A24C' }}>Q1.What is the difference between Built-Up Area, Super Built-Up Area, and Carpet Area?</summary>
                                        <p className="about-para">  Carpet Area: This is the area of the apartment that does not include the area of the walls i.e. the area of the apartment that a carpet can cover.
                                        Built-Up Area: This is the area of the apartment that includes the area covered by the walls.
Super Built-Up Area: This includes the built-up areas such as the lobby, lifts, stairs etc. This term is therefore only applicable for multi-dwelling units, such as flat complexes</p>
                                    </details>

                                    <details className="text-justify">
                                        <summary className="text-justify about-para" style={{ color: '#D0A24C' }}>Q2.What is the difference between the lease agreement and the Leave and License agreement?</summary>
                                        <p className="about-para"> A Lease, defined under Section 105 of The Transfer of Property Act, 1882, is a transfer of the right to enjoy the concerned property for a pre-defined time period or in perpetuity. The lessor (owner of the property) gives the lessee (the one leasing the property) such consideration periodically, usually at the beginning or end of a lease agreement.
                                        License is defined in Section 52 of the Indian Easements Act,1882. License does not allow any interest in the premises on the licensee’s part. It merely gives the licensee the right to use and occupy the premises for a limited duration.
A lease deed needs to be stamped and registered. The amount payable towards the lease deed’s stamp duty is more than that payable towards the Leave and License’s. For a period exceeding three years, the stamp duty is same for both agreements.</p>
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

export default Faqs
