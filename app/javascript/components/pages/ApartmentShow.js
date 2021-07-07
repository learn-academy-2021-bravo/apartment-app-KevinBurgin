import React, { Component } from 'react'
import { Card, CardText, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export class ApartmentShow extends Component {
    render() {
        let { apartment } = this.props
        return (
            <div>
                {apartment &&
                <Card className="apartment-show-main">
                <img src={ apartment.picture } alt="apartment picture"></img>
                <CardText>Street: {apartment.street}</CardText>
                <CardText>City: {apartment.city}</CardText>
                <CardText>State: {apartment.state}</CardText>
                <CardText>Manager: {apartment.manager}</CardText>
                <CardText>Managers Email: {apartment.managers_email}</CardText>
                <CardText>Price: {apartment.price}</CardText>
                <CardText>Bedrooms: {apartment.bedrooms}</CardText>
                <CardText>Bathrooms: {apartment.bathrooms}</CardText>
                <CardText>Pets: {apartment.pets}</CardText>
                </Card>
                }
                    {apartment.user_id === this.props.user.id && 
                    <NavItem>
                            <NavLink to={`/apartmentupdate/${apartment.id}`}>Edit Apartment</NavLink>
                    </NavItem>
                    }
                
            </div>
        )
    }
}

export default ApartmentShow
