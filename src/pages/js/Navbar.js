import React, { Component } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import "../css/Navbar.css"
export default class Navbar extends Component {
  render() {
    return (
      <div>
<div className='navbar'>
    <div className='navbarbody'>
       <span> <BsTelephone/>+99896487223</span>
       <span> <FaMapMarkerAlt/>Tashkent</span>
    </div>
    <div className='navbarheader'></div>
     </div>
      </div>
    )
  }
}
