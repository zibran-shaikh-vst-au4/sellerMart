import React, { useEffect, Fragment } from 'react'


const Footer = () => {

    

    return (
        <Fragment>
            <div id="footer">
                {/*  <div className="container mt-1 text-center">
                        <div className="row">
                            <div className="col-md-12" style={{ color: 'white' }}>

                                <h4 className="display-5" style={{ fontFamily: 'DIN-Medium', color: '#D0A24C' }}>IT'S TIME TO DISCOVER</h4>
                                <h5 className="display-5" style={{ fontFamily: 'DIN-Medium', color: '#D0A24C' }}>VENGURLEKARS CHAITRA</h5>
                            </div>
                        </div>
                    </div> */}




                <div id="contact-footer" style={{ background: '#231f20', padding: '0px' }}>
                    {/* <div className="container" >
                            <div className="row mb-1">
                                <div className="col-md-3 mx-auto" >

                                    <div className="section-title ">
                                        <h5 style={{ color: ' #D0A24C' }}>Link</h5>
                                        <div>
                                            <ul >
                                                <li><a href="/home"><span style={{ fontSize: '14px', color: 'white' }}>Home</span></a></li>
                                                <li><a href="/about"><span style={{ fontSize: '14px', color: 'white' }}>About</span></a></li>
                                                <li><a href="/corevalues"><span style={{ fontSize: '14px', color: 'white' }}>Corevalues</span></a></li>
                                                <li><a href="/projects"><span style={{ fontSize: '14px', color: 'white' }}>Projects</span></a></li>
                                                <li><a href="/contact"><span style={{ fontSize: '14px', color: 'white' }}>Contact</span></a></li>

                                            </ul>
                                        </div>
                                    </div>



                                </div>




                                <div className="col-md-4">

                                    <div className="section-title">
                                        <h5 style={{ color: '#D0A24C' }}>Address</h5>


                                        <p style={{ fontSize: "14px" }}><span><i style={{ color: '#D0A24C' }} className="fa fa-map-marker mr-2"></i>
                                        </span>Vengurlekars Chaitra
                                        Builidng No. 26 opp Andheri Sport Complex vip gate (No 3)
                                        Azad Nagar JP Road Andheri West Mumbai 400053</p>

                                        <div className="contact-item">
                                            <p style={{ fontSize: "14px" }}><span><i className="fa fa-phone"></i></span>+91 98200 46711, +91 98920 09454</p>
                                        </div>
                                        <div className="contact-item">
                                            <p style={{ fontSize: "14px" }}><span><i className="fa fa-envelope-o"></i></span>info@vengurlekars.net</p>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>*/}
                    <div className="container contact-page-footer justify-center" id="box">

                        <div className="box" /* data-aos="fade-up-right" */>
                            <div className="icon">
                                <i className="fa fa-phone" aria-hidden='true'> </i>
                            </div>
                            <div className="content">

                                <p>Phone : +91 98200 46711 , +91 98920 09454 </p>
                               

                            </div>

                        </div>

                        <div className="box" /* data-aos="fade-up" */>
                            <div className="icon">
                                <i className="fa fa-map-marker" aria-hidden='true'> </i>
                            </div>
                            <div className="content">

                                <p>
                                   Address : VENGURLEKARS CHAITRA
                                    BLDG-26
                                    OPP ANDHERI SPORT COMPLEX
                                    AZAD NAGAR
                                    JP ROAD
                                    ANDHERI (W)
                                    MUMBAI 53.</p>

                            </div>
                        </div>
                        <div className="box" /* data-aos="fade-up-left" */>
                            <div className="icon">
                                <i className="fa fa-envelope-o " aria-hidden='true' > </i>
                            </div>
                            <div className="content " id="email-content-footer">

                                <p>Email : info@vengurlekars.net</p>

                            </div>

                        </div>



                    </div>
                </div>

                <div className="container-fluid text-center social-media" >
                    <h5 style={{ color: '#D0A24C' }} /* data-aos="fade-right" */>Social Avenues</h5>
                    <div className="icons text-center mb-5"/* data-aos="fade-left" */>

                        <a className="p-4" > <i className="fa fa-facebook fa-1x"></i></a>
                        <a className="p-4"> <i className="fa fa-twitter fa-1x"></i></a>
                        <a className="p-4"> <i className="fa fa-instagram fa-1x"></i></a>
                        <a className="p-4"> <i className="fa fa-whatsapp fa-1x"></i></a>
                    </div>

                    <p>&copy; 2020 Vengurlekars . All Rights Reserved</p>

                </div>

            </div >



        </Fragment>
    )

}

export default Footer
