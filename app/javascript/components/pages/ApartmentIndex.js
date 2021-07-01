import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export class ApartmentIndex extends Component {
    render() {
        const{ apartments } = this.props
        return (
            <div>
                <h1>Apartments</h1>
                {apartments && apartments.map(apartment => {
                    return <div key={apartment.id}>
                        <p>Street: {apartment.street}</p>
                        <p>City: {apartment.city}</p>
                        {/* <p>{apartment.state}</p> */}
                        {/* <p>{apartment.manager}</p>
                        <p>{apartment.managers_email}</p> */}
                        {/* <p>{apartment.price}</p> */}
                        <p>Bedrooms: {apartment.bedrooms}</p>
                        <p>Bathrooms: {apartment.bathrooms}</p>
                        {/* <p>{apartment.pets}</p> */}
                        {/* <p>{apartment.user_id}</p> */}
                        <NavLink to= {`/apartmentshow/${apartment.id}`} key = {apartment.id}>
                            <Button>More Info</Button>
                        </NavLink>
                    </div>
                })}
            </div>
        )
    }
}

export default ApartmentIndex
