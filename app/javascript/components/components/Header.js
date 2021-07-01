import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'



const Header = (props) =>{
            const [collapsed, setCollapsed] = useState(true)
            const toggleNavbar = () => setCollapsed(!collapsed)
        const{
            logged_in,
            sign_in_route,
            sign_out_route} = props
            

        return (
            <div className="header-main">
                {!logged_in && <a href={ sign_in_route }>SignIn</a>}
                {logged_in && 
                <>
                <a href={ sign_out_route }>SignOut</a>
                <br/>
                <Navbar color="faded" light>
                <NavbarToggler onClick={ toggleNavbar } className="mr-2" />
                    <Collapse isOpen={ !collapsed } navbar>
                        <Nav navbar>  
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <br/>
                            <NavItem>
                                <NavLink to="/apartmentindex">Apartment Listings</NavLink>
                            </NavItem>
                            <br/>
                            <NavItem>
                                <NavLink to="/apartmentnew">List New Apartments</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                </>}
            </div>
        )
    }



export default Header

