import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap';

// import 'materialize-css'; // It installs the JS asset only
// import 'materialize-css/dist/css/materialize.min.css';

class List extends Component {
    render() {
        return (
            <div id="about">
                <img className="shared-image"
                    style={{ maxWidth: '100%', minHeight: '300px' }}
                    src="https://demo2wpopal.b-cdn.net/maisonco/wp-content/uploads/2018/12/bg-breadcrumb.jpg">

                </img>
                <div className="container">
                    <div className="row" style={{ margin: '100px' }}>
                        {/* <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt="" /> </div> */}
                        <div className="col-xs-12 col-md-12">
                            <div className="about-text">
                                <h3>List of Documents Required From The Societies For Redevelopment :</h3>
                                <div className="list-style">
                                    <div className="col-lg-12 col-sm-12 col-xs-12 mt-5">
                                        <ul className="text-justify about-para">

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
