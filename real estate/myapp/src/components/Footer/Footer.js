import React, { Component , Fragment} from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {

    render() {

        return (
            <Fragment>
            <div id="footer">
                <div className="container mt-5 text-center">
                    <div className="row">
                        <div className="col-md-12" style={{ color: 'white' }}>
                            
                            <h4 className="display-5" style={{ fontFamily: 'DIN-Medium',color:'#D0A24C'}}>IT'S TIME TO DISCOVER</h4>
                            <h5 className="display-5" style={{ fontFamily: 'DIN-Medium',color:'#D0A24C'}}>VENGURLEKARS CHAITRA</h5>
                        </div>
                    </div>
                </div>




                <div id="contact" style={{ background: '#231f20', paddingTop: '40px' }}>
                    <div className="container-fluid" >
                        <div className="row offset-md-1">
                            <div className="col-md-2">

                                <div className="section-title ">
                                    <h3 style={{ color:' #D0A24C' }}>Link</h3>
                                    <div>
                                        <ul>
                                            <li><a href="/home"><span style={{ fontSize: '12px', color: 'white' }}>Home</span></a></li>
                                            <li><a href="/about"><span style={{ fontSize: '12px', color: 'white' }}>About</span></a></li>
                                            <li><a href="/corevalues"><span style={{ fontSize: '12px', color: 'white' }}>Corevalues</span></a></li>
                                            <li><a href="/projects"><span style={{ fontSize: '12px', color: 'white' }}>Projects</span></a></li>
                                            <li><a href="/contact"><span style={{ fontSize: '12px', color: 'white' }}>Contact</span></a></li>

                                        </ul>
                                    </div>
                                </div>



                            </div>

                            <div className="col-md-4">

                                <div className="section-title">
                                    <h3 style={{ color: '#D0A24C' }}>About Us</h3>
                                    <p className="pr-5">Today, lifestyles echoes the canons achieved. Emancipated by tradition, convention or doctrines, the present-day world order is modern-day lifestyle and only the superlative fits the bill.</p>
                                    <p><span><i style={{color:'#D0A24C'}} className="fa fa-map-marker"></i></span> Google Map For Location</p>
                                </div>


                            </div>


                            <div className="col-md-4">

                                <div className="section-title">
                                    <h3 style={{ color: '#D0A24C' }}>Address</h3>


                                    <p><span><i style={{color:'#D0A24C'}} className="fa fa-map-marker mr-2"></i>
                                    </span>VENGURLEKARS CHAITRA
                                        BUILDING NO. 26 OPP ANDHERI SPORT COMPLEX VIP GATE (NO 3)
                                        AZAD NAGAR JP ROAD ANDHERI WEST MUMBAI 400053</p>

                                    <div className="contact-item">
                                        <p><span><i className="fa fa-phone"></i></span>+91 98200 46711, +91 98920 09454</p>
                                    </div>
                                    <div className="contact-item">
                                        <p><span><i className="fa fa-envelope-o"></i></span>info@vengurlekars.net</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center social-media" >
                 <p>&copy; 2020 Vengurlekars . All Rights Reserved</p>
                 <div className="icons">
                     <a className="p-5"> <i className="fa fa-facebook fa-1x"></i></a>
                     <a className="p-5"> <i className="fa fa-twitter fa-1x"></i></a>
                     <a className="p-5"> <i className="fa fa-instagram fa-1x"></i></a>
                     <a className="p-5"> <i className="fa fa-whatsapp fa-1x"></i></a>
                 </div>
             </div>
               
            </div >
           
             
         
         </Fragment>
        )
    }
}

export default Footer
