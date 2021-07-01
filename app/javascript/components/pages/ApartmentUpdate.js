import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export class ApartmentUpdate extends Component {
    constructor(porps){
        super(props)
        this.state = {
            form: {
                street: this.porps.apartment ? this.props.apartment.street : "",
                city: this.porps.apartment ? this.props.apartment.city : "",
                state: this.porps.apartment ? this.props.apartment.state : "",
                manager: this.porps.apartment ? this.props.apartment.manager : "",
                managers_email: this.porps.apartment ? this.props.apartment.managers_email : "",
                price: this.porps.apartment ? this.props.apartment.price : "",
                bedrooms: this.porps.apartment ? this.props.apartment.bedrooms : "",
                bathrooms: this.porps.apartment ? this.props.apartment.bathrooms : "",
                pets: this.porps.apartment ? this.props.apartment.pets : ""
            },
            submitted: false
        }
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
      }
    
      handleSubmit = () => {
        this.props.updateApartment(this.state.form, this.props.apartment.id)
        this.setState({ submitted: true })
      }

    render() {
        return (
            <div>
            <Form>
                <FormGroup>
                    <Label for="street" id="street">What is your apartment's street?</Label>
                    <Input
                    type="text"
                    name="street"
                    onChange={ this.handleChange }
                    value={ this.state.form.street }
                    />
                </FormGroup>
            </Form>
            <br />
                <FormGroup>
                    <Label for="city" id="city">What is your apartment's city?</Label>
                    <Input
                    type="number"
                    name="city"
                    onChange={ this.handleChange }
                    value={ this.state.form.city }
                    />
                </FormGroup>
            <br />
                <FormGroup>
                    <Label for="state" id="state">What is your apartment's state?</Label>
                    <Input
                    type="text"
                    name="state"
                    onChange={ this.handleChange }
                    value={ this.state.form.state }
                    />
                </FormGroup>
            <br />
                <FormGroup>
                    <Label for="manager" id="manager">What is the apartment manager's name?</Label>
                    <Input
                    type="text"
                    name="manager"
                    onChange={ this.handleChange }
                    value={ this.state.form.manager }
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="managers_email" id="managers_email">What is the apartment manager's email??</Label>
                    <Input
                    type="text"
                    name="managers_email"
                    onChange={ this.handleChange }
                    value={ this.state.form.managers_email }
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="price" id="price">What is the price of your apartment?</Label>
                    <Input
                    type="text"
                    name="price"
                    onChange={ this.handleChange }
                    value={ this.state.form.price }
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="bedrooms" id="bedrooms">How many bedrooms does your aparment have?</Label>
                    <Input
                    type="number"
                    name="bedrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bedrooms }
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="bathrooms" id="bathrooms">How many bathrooms does your apartment have?</Label>
                    <Input
                    type="number"
                    name="bathrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bathrooms }
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="pets" id="pets">Does your apartment allow pets?</Label>
                    <Input
                    type="text"
                    name="pets"
                    onChange={ this.handleChange }
                    value={ this.state.form.state }
                    />
                </FormGroup>
                <br/>
                <Button name="sumbit" onClick={ this.handleSubmit }>
                    Edit Apartment
                </Button>
            </div>
        )
    }
}

export default ApartmentUpdate
