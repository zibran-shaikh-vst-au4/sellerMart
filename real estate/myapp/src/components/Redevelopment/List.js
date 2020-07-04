import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div id="about">
                <img className="shared-image"
                    style={{ maxWidth: '100%' }}
                    src="../img/34.jpg">
                </img>

                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-xs-12 col-md-12">
                            <div className="about-text">
                                <h4>List of Documents Required From The Societies For Redevelopment :</h4>
                                <div className="list-style">
                                    <div className="col-lg-12 col-sm-12 col-xs-12 mt-5">
                                        <ul data-aos="fade-up" className="text-justify about-para">
                                            <li>Society registration certificate.</li>
                                            <li>Approved building plan.</li>
                                            <li>Conveyance deed/ lease deed/ sale deed.</li>
                                            <li>Copy of resolution documents/ papers/ deeds/ agreements, etc., whatsoever in nature, related to the society's plot.</li>
                                            <li>Property card.</li>
                                            <li>DP remark.</li>
                                            <li>Extract of 6/12, 7/12.</li>
                                            <li>Search report and title certificate.</li>
                                            <li>Index II, NA order.</li>
                                            <li>City survey plan.</li>
                                            <li>Copy of IOD, commencement certificate, occupancy certificate, completion certificate.</li>
                                            <li>Latest electricity bill, Water bill, Municipal tax bill, N.A. tax bill.</li>
                                        </ul>
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

export default List
