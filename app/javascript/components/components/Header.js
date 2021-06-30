import React, { Component } from 'react'
import{ NavLink } from 'react-router-dom'

export class Header extends Component {
    render() {
        const{
            logged_in,
            sign_in_route,
            sign_out_route} = this.props
        return (
            <div>
                {logged_in && <a href={ sign_out_route }>SignOut</a>}
                {!logged_in && <a href={ sign_in_route }>SignIn</a>}
                <br/>
                <NavLink to="/">Home</NavLink>
                <br/>
                <NavLink to="/apartmentindex">Apartment Listings</NavLink>
            </div>
        )
    }
}

export default Header

