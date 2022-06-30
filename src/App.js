import React, { Component } from 'react'
import Dashboard from './pages/js/Dashboard'
import Error from './pages/js/Error'
import Navbar from './pages/js/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Dashboard/>
        <Error/>
      </div>
    )
  }
}
