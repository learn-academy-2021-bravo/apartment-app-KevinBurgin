import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card } from 'reactstrap'

export class ApartmentIndex extends Component {
    render() {
        const{ apartments } = this.props
        return (
            <div>
                <h1 className="index-title">Apartments</h1>
                {apartments && apartments.map(apartment => {
                    return <div key={apartment.id}>
                        <Card  className="apartment-index-card">
                        <p>Street: {apartment.street}</p>
                        <p>City: {apartment.city}</p>
                        <p>Bedrooms: {apartment.bedrooms}</p>
                        <p>Bathrooms: {apartment.bathrooms}</p>
                        <NavLink to= {`/apartmentshow/${apartment.id}`} key = {apartment.id}>
                            <Button className="button-style">More Info</Button>
                        </NavLink>
                        </Card>
                    </div>
                })}
            </div>
        )
    }
}

export default ApartmentIndex
