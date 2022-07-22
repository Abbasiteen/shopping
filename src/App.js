import React, { Component } from 'react'
import Dashboard from './pages/js/Dashboard'
import Error from './pages/js/Error'
import Navbar from './pages/js/Navbar'
import Footer from './pages/js/Footer'
import About from './pages/js/About'
import Contact from './pages/js/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>    
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
        <Navbar/>
        {/* <Contact/> */}
        <About/>
        {/* <Dashboard/>  */}
        <Footer/>
        {/* <Error/> */}
      </div>
    )
  }
}
