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
import New from './pages/js/News'
import Xit from './pages/js/Xit'
import Products from './pages/js/Products'
import Ordered from './pages/js/Basket'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div> 
           <Navbar/>
        <Router>
            <Routes>
              <Route  path='/' element={<Dashboard/>}></Route>
              <Route  path='/Contact' element={<Contact/>}></Route>
              <Route  path='/About' element={<About/>}></Route>
              <Route  path='/Inform' element={<Inform/>}></Route>
              <Route  path='/Inform' element={<Inform/>}></Route>
              <Route  path='/All' element={<Discount/>}></Route>
              <Route  path='/News' element={<New/>}></Route>
              <Route  path='/xit' element={<Xit/>}></Route>
              <Route  path='/products' element={<Products/>}></Route>
              <Route  path='/Ordered' element={<Ordered/>}></Route>
            </Routes>
        </Router>
        <Footer/>
      </div>
    )
  }         
}
