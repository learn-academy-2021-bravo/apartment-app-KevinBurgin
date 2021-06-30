import React from "react"
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'


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

  render () {
    const{
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route} = this.props

    return (
      <Router>
        <h1>Appartment App</h1>
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
            return <ApartmentShow apartment= {apartment}/>
          }}/>
          <Route component={ NotFound }/>
        </Switch>
      </Router>
    );
  }
}

export default App
