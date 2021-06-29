import React from "react"
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import PropTypes from "prop-types"

class App extends React.Component {
  render () {
    const{
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route} = this.props
      
    return (
      <>
      <Header sign_in_route={ sign_in_route} 
      sign_out_route={sign_out_route} logged_in={ logged_in}/>
      </>
    );
  }
}

export default App
