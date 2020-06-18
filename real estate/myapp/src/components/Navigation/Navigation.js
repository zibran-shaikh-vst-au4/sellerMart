import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Navigation extends Component {


    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ paddingTop: '0px' }}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        <NavLink to="/home"><a className="navbar-brand"><span style={{ marginLeft: '0px' }}><img src="img/logo.png" width="50%" /></span>
                        </a></NavLink></div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                            <li><NavLink to="/corevalues" className="nav-link">Corevalues</NavLink></li>
                            <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
                            {/* <li><NavLink to="/feature">Feature</NavLink></li>
                            <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
                            <li><NavLink to="/gallery" className="nav-link">Gallery</NavLink></li>
                            <li><NavLink to="/testimonials" className="nav-link">Testimonials</NavLink></li>
                            <li><NavLink to="/team" className="nav-link">Team</NavLink></li> */}
                            <li><div className="dropbtn"><div className="dropdown"><span class="dropbtn" style={{ margin: '0px' }}>Redevelopment <i className="fa fa-caret-down" style={{ paddingLeft: '10px' }}></i></span><div class="dropdown-content">
                                <NavLink to="/benefits" className="nav-link">Benefits</NavLink>
                                <NavLink to="/potential" className="nav-link">Potential</NavLink>
                                <NavLink to="/list" className="nav-link">List</NavLink>
                            </div></div></div></li>
                            <li><div className="dropbtn"><div className="dropdown"><span class="dropbtn" style={{ margin: '0px' }}>Buyer's Guide <i className="fa fa-caret-down" style={{ paddingLeft: '10px' }}></i></span><div class="dropdown-content">
                                <NavLink to="/faqs" className="nav-link">FAQs</NavLink>
                                <NavLink to="/tips" className="nav-link">Buying Tips</NavLink>

                            </div></div></div></li>
                            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation
