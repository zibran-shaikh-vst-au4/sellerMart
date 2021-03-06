import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
/* import Login from '../Auth/Login' */
import { faStore, faUser, faChartLine, faLuggageCart, faShoppingBag, faGifts, faSignInAlt, faAddressBook, faSignOutAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import UserModal from '../Home/userModal';

const Navbar = (props) => {

    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        props.logout();
    };
    const [pathname, setPathname] = useState('/');
    const checkActive = (match, location) => {
        if (!location) return false;
        setPathname(location.pathname);
        return pathname === "/" ? false : pathname === "/";
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg fixed-top shadow" style={{ backgroundColor: '#071e3d' }}>
                {props.loggedIn ? (
                    <Fragment>
                        <Link to="/stats" className="navbar-brand" style={{ color: '#21e6c1', marginLeft: '10px' }}><FontAwesomeIcon icon={faStore} style={{ fontSize: '1.5em' }} /> SellerApp</Link>

                        <ul className="navbar-nav ml-auto" style={{ alignItems: 'center' }}>


                            <li className={"nav-item " + (pathname === '/stats' ? 'active' : '')}><Link to="/stats" isActive={checkActive} className="nav-link"><FontAwesomeIcon icon={faChartLine} style={{ fontSize: '1em', marginRight: '5px' }} /> Stats</Link></li>
                            <li className={"nav-item " + (pathname === '/manage' ? 'active' : '')}><Link to="/manage" isActive={checkActive} className="nav-link"><FontAwesomeIcon icon={faLuggageCart} style={{ fontSize: '1em', marginRight: '5px' }} /> Manage Products</Link></li>
                            <li className={"nav-item " + (pathname === '/marketplace' ? 'active' : '')}><Link to="/marketplace" isActive={checkActive} className="nav-link"><FontAwesomeIcon icon={faGifts} style={{ fontSize: '1em', marginRight: '5px' }} />Marketplace</Link></li>
                            <li className={"nav-item " + (pathname === '/shopping' ? 'active' : '')}><Link to="/shopping" isActive={checkActive} className="nav-link"><FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: '1em', marginRight: '5px' }} /> Shopping</Link></li>
                            <li className="nav-item dropdown " style={{ cursor: "pointer" }}>
                                <a className="dropdown-toggle " data-toggle="dropdown">
                                    <nav isActive={checkActive} className="nav-link mt-2" >
                                        <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                                      {/*   {JSON.parse(localStorage.getItem('user')).name} */}
                                        <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '5px' }} />
                                    </nav>

                                </a>
                                <ul className="dropdown-menu" >
                                    <li><a href="#myModal" data-toggle="modal" data-target="#myModal">Edit Profile</a> </li>
                                    <li><a href="/orders">Orders</a> </li>

                                </ul>

                            </li>


                            <li className={"nav-item " + (pathname === '/logout' ? 'active' : '')}>
                                <Link isActive={checkActive} className="nav-link" to="/logout" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '1em', marginRight: '5px' }} />Logout</Link>
                            </li>
                        </ul>
                    </Fragment>
                ) : (
                        <Fragment>
                            <ul className="navbar-nav ml-auto" style={{ alignItems: 'center' }}>
                                <li className={"nav-item " + (pathname === '/login' ? 'active' : '')}>
                                    <Link isActive={checkActive} to="/login" className="nav-link"><FontAwesomeIcon icon={faSignInAlt} style={{ fontSize: '1em', marginRight: '5px' }} />Login</Link>
                                </li>
                                {/* <button type="button" class="btn btn-outline-warning" data-toggle="modal"
                                    data-target="#loginModal">Log In
                            </button> */}
                                <li className={"nav-item " + (pathname === '/register' ? 'active' : '')}>
                                    <Link isActive={checkActive} to="/register" className="nav-link"><FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '1em', marginRight: '5px' }} />Register</Link>
                                </li>
                                {/* <li className={"nav-item " + (pathname === '/forget-password' ? 'active' : '')}>
                                    <NavLink isActive={checkActive} to="/forget-password" className="nav-link">Forget Password</NavLink>
                                </li> */}

                            </ul>
                            <div id="loginModal" className="modal fade right" role="dialog" aria-labelledby="loginTitle" aria-hidden="true"
                                tabindex="-1">
                                <div className="modal-dialog" role="document">

                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="loginTitle">Login</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <h4>login</h4>
                                            {/* <Login /> */}

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Fragment>

                    )}


            </nav >
            {props.children}
            <UserModal />
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({ type: "SET_LOGOUT" })
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);