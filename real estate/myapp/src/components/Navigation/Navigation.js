import React, { Component, Fragment } from 'react';
import MyVerticallyCenteredModal from './contactModal'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Button } from "react-bootstrap"


class Navigation extends Component {
    state = {
        scroll: false,
        modalShow: false
    }
    componentDidMount = () => {

        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 200;
            console.log('istop', isTop)

            if (isTop) {
                this.setState({
                    scroll: true
                }, () => console.log("state", this.state))
            } else {
                this.setState({
                    scroll: false
                }, () => console.log("state", this.state))
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {
        const { scroll } = this.state
        return (

            <Fragment>

                <Navbar expand="lg" fixed="top" className={scroll ? 'nav-scroll ' : "nav-nonscroll "}  >
                    <Navbar.Brand className="nav-logo" href="/home" className='p-3 ml-5' >
                        <img src="img/logo.png" width='180' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <Nav.Link id='nav-link' href="/home">Home</Nav.Link>
                            <Nav.Link id='nav-link' href="/about">About Us</Nav.Link>
                            <Nav.Link id='nav-link' href="/corevalues">Core Values</Nav.Link>
                            <Nav.Link id='nav-link' href="/projects">Projects</Nav.Link>

                            <NavDropdown id='nav-link' title="Redevelopment">
                                <NavDropdown.Item href="/benefits" >BENEFITS</NavDropdown.Item>

                                <NavDropdown.Item href="/potential">POTENTIAL</NavDropdown.Item>

                                <NavDropdown.Item href="/list">LIST</NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown id='nav-link' title="Buyer's Guide" >
                                <NavDropdown.Item href="/faqs">FAQS</NavDropdown.Item>

                                <NavDropdown.Item href="/tips">TIPS</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link id='nav-link' href="/contact">Contact Us</Nav.Link>
                            <Button onClick={() => this.setState({modalShow: true})}variant="outline-light" size="lg" style={{ color: '#D0A24C', border: '2px solid #D0A24C',marginLeft:'100px', fontSize:'14px'}}>SCHEDULE A VISIT</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({modalShow: false})}
                />

            </Fragment >
        )
    }

}

export default Navigation;
