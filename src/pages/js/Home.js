import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Error from './Error'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Inform from './Inform'
export default class App extends Component {
  render() {
    return (
      <div>    
        <Navbar/>
        <Contact/>
        <About/>
        <Inform/>
        <Dashboard/> 
        <Footer/>
        <Error/>
      </div>
    )
  }         
}
