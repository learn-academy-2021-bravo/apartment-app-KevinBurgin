import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export class ApartmentShow extends Component {
    render() {
        let { apartment } = this.props
        return (
            <div>
                {apartment &&
                <Card>
                <CardTitle tag="h5">Street: {apartment.street}</CardTitle>
                <CardText>City: {apartment.city}</CardText>
                <CardText>State: {apartment.state}</CardText>
                <CardText>Manager: {apartment.manager}</CardText>
                <CardText>Managers Email: {apartment.managers_email}</CardText>
                <CardText>Price: {apartment.price}</CardText>
                <CardText>Bedrooms: {apartment.bedrooms}</CardText>
                <CardText>Bathrooms: {apartment.bathrooms}</CardText>
                <CardText>Pets: {apartment.pets}</CardText>
                <CardText>User ID: {apartment.user_id}</CardText>
                </Card>
                }
            </div>
        )
    }
}

export default ApartmentShow
