import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'
function NavBar() {
    return (
        <>
            <ReactBootStrap.Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand><img className="LOGO" src="https://ieee-jaduniv.in/mla/img/WHITEML.png" alt="LOGO"/></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="Table">
                            <ul className="navbar-nav">
                                <li className='list-item'><NavLink exact to="/" className='link' activeClassName="current">Home</NavLink></li>
                                <li className='list-item'><NavLink exact to="/About" className='link' activeClassName="current">About</NavLink></li>
                                <li className='list-item'><NavLink exact to="/Speakers" className='link' activeClassName="current">Speakers</NavLink></li>
                                <li className='list-item'><NavLink exact to="/Sponsors" className='link' activeClassName="current">Sponsors</NavLink></li>
                                <li className='list-item'><NavLink exact to="/Contact" className='link' activeClassName="current">Contact</NavLink></li>
                            </ul>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </>
    )
}
export default NavBar