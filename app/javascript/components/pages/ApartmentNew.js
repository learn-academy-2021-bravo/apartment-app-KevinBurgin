import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {Redirect} from 'react-router-dom'

export class ApartmentNew extends Component {
    constructor(props){
        super(props)
        this.state={
            form: {
                picture: "",
                street: "",
                city: "",
                state: "",
                manager: "",
                managers_email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "",
                user_id: this.props.user.id
            },
            submitted: false
        }
    }

    handleChange = (e) =>{
        let{ form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    handleSubmit = () =>{
        console.log(this.state.form)
        this.props.createApartment(this.state.form)
        this.setState({submitted: true})
    }

    
    render() {
        return (
            <div>
                <h1 className="new-title">List A New Apartment</h1>
                <Form className="new-form">
                <FormGroup>
                        <Label for = "picture">Apartment Picture</Label>
                        <Input type = "text" name = "picture" 
                        onChange={this.handleChange}
                        value = { this.state.form.picture }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "street">Apartment's Street</Label>
                        <Input type = "text" name = "street" 
                        onChange={this.handleChange}
                        value = { this.state.form.street }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "city">Apartment's City</Label>
                        <Input type = "text" name = "city" 
                        onChange={this.handleChange}
                        value = { this.state.form.city }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "state">Apartment's State</Label>
                        <Input type = "text" name = "state" 
                        onChange={this.handleChange}
                        value = { this.state.form.state }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "manager">Manager's Name</Label>
                        <Input type = "text" name = "manager" 
                        onChange={this.handleChange}
                        value = { this.state.form.manager }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "managers_email">Manager's Email</Label>
                        <Input type = "text" name = "managers_email" 
                        onChange={this.handleChange}
                        value = { this.state.form.managers_email }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "price">Apartment's Price</Label>
                        <Input type = "text" name = "price" 
                        onChange={this.handleChange}
                        value = { this.state.form.price }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "bedrooms">Number of Bedrooms</Label>
                        <Input type = "text" name = "bedrooms" 
                        onChange={this.handleChange}
                        value = { this.state.form.bedrooms }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "bathrooms">Number of Bathrooms</Label>
                        <Input type = "text" name = "bathrooms" 
                        onChange={this.handleChange}
                        value = { this.state.form.bathrooms }/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for = "pets">Pets?</Label>
                        <Input type = "text" name = "pets" 
                        onChange={this.handleChange}
                        value = { this.state.form.pets }/>
                    </FormGroup>
                    
                    <Button className="button-style" name="submit" onClick={this.handleSubmit}>Add Apartment</Button>
                </Form>
                {this.state.submitted && <Redirect to = "/apartmentindex" />}

            </div>
        )
    }
}

export default ApartmentNew
