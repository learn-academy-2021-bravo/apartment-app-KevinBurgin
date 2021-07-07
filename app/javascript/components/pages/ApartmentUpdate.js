import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export class ApartmentUpdate extends Component {
    constructor(props){
        super(props)
        const{apartment} =this.props
        this.state = {
            form: {
                picture: apartment ? apartment.picture : "",
                street: apartment ? apartment.street : "",
                city: apartment ? apartment.city : "",
                state: apartment ? apartment.state : "",
                manager: apartment ? apartment.manager : "",
                managers_email: apartment ? apartment.managers_email : "",
                price: apartment ? apartment.price : "",
                bedrooms: apartment ? apartment.bedrooms : "",
                bathrooms: apartment ? apartment.bathrooms : "",
                pets: apartment ? apartment.pets : "",
                user_id: this.props.user ? this.props.user.id : ""
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
                    <Label for="picture" id="picture">Apartment picture?</Label>
                    <Input
                    type="text"
                    name="picture"
                    onChange={ this.handleChange }
                    value={ this.state.form.picture }
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="street" id="street">What is your apartment's street?</Label>
                    <Input
                    type="text"
                    name="street"
                    onChange={ this.handleChange }
                    value={ this.state.form.street }
                    />
                </FormGroup>
            <br />
                <FormGroup>
                    <Label for="city" id="city">What is your apartment's city?</Label>
                    <Input
                    type="text"
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
                    value={ this.state.form.pets }
                    />
                </FormGroup>
                </Form>
                <br/>
                <Button className="button-style" name="sumbit" onClick={ this.handleSubmit }>
                    Edit Apartment
                </Button>
                {this.state.submitted && <Redirect to = "/apartmentindex" />}
            </div>
        )
    }
}

export default ApartmentUpdate
