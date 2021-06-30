import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export class ApartmentIndex extends Component {
    render() {
        const{ apartments } = this.props
        return (
            <div>
                <h1>Apartment index</h1>
                {apartments && apartments.map(apartment => {
                    return <div key={apartment.id}>
                        <p>{apartment.street}</p>
                        <p>{apartment.city}</p>
                        {/* <p>{apartment.state}</p> */}
                        {/* <p>{apartment.manager}</p>
                        <p>{apartment.managers_email}</p> */}
                        <p>{apartment.price}</p>
                        <p>{apartment.bedrooms}</p>
                        <p>{apartment.bathrooms}</p>
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
