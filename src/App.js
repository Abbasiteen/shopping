import React, { Component } from 'react'
import Dashboard from './pages/js/Dashboard'
// import Error from './pages/js/Error'
import Navbar from './pages/js/Navbar'
import Footer from './pages/js/Footer'
import About from './pages/js/About'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <About/>
        {/* <Dashboard/> */}
        <Footer/>
        {/* <Error/> */}
      </div>
    )
  }
}
