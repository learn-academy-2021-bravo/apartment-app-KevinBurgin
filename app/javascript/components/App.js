import React from "react"
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentUpdate from './pages/ApartmentUpdate'
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.readApartments()
  }

  readApartments = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({ apartments: payload}))
    .catch(errors => console.log("Read errors:", errors))
  }

  createApartment = (newapartment) => {
    console.log(newapartment)
    fetch("/apartments", {
      body: JSON.stringify(newapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readApartments())
    .catch(errors => console.log("Apartment create fetch errors:", errors))
    // console.log(newapartment)
  }

  updateApartment = (editapartment, id) => {
    console.log(editapartment)
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(editapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      } else {
        return response.json()
      }
    })
    .then(payload => this.readApartments())
    .catch(errors => console.log("Apartment update fetch errors:", errors))
  }

  render () {
    const{
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route} = this.props

    return (
      <Router>
        
        <Header sign_in_route={ sign_in_route} 
          sign_out_route={sign_out_route} 
          logged_in={ logged_in}
        />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/apartmentindex" render={(props) => {
          return <ApartmentIndex apartments={ this.state.apartments }/>
          }}/>
          <Route path="/apartmentshow/:id" render={(props) =>{
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment =>  apartment.id === +id)
            return <ApartmentShow apartment= {apartment} user={current_user}/>
          }}/>
          <Route path="/apartmentnew" render={(props) => <ApartmentNew createApartment={this.createApartment} user={current_user}/> } />
          <Route path={"/apartmentupdate/:id"} render={ (props) => {
            let id =props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentUpdate updateApartment={ this.updateApartment } apartment={ apartment } user={current_user}/>
          }} />
          <Route component={ NotFound }/>
        </Switch>
      </Router>
    );
  }
}

export default App
