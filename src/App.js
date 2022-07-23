import React, { Component } from 'react'
import Dashboard from './pages/js/Dashboard'
import Error from './pages/js/Error'
import Navbar from './pages/js/Navbar'
import Footer from './pages/js/Footer'
import About from './pages/js/About'
import Contact from './pages/js/Contact'
import Inform from './pages/js/Inform'
import Home from './pages/js/Home'
import Discount from './pages/js/Discount'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div> 
           <Navbar/>
        <Router>
            <Routes>
              <Route exact path='/' element={<Dashboard/>}></Route>
              <Route exact path='/Contact' element={<Contact/>}></Route>
              <Route exact path='/About' element={<About/>}></Route>
              <Route exact path='/Inform' element={<Inform/>}></Route>
              <Route exact path='/Inform' element={<Inform/>}></Route>
              <Route exact path='/All' element={<Discount/>}></Route>
            </Routes>
        </Router>
        <Footer/>
      </div>
    )
  }         
}
