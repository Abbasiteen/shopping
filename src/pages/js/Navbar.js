import React, { Component } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../img/logo.png'
import "../css/Navbar.css"
export default class Navbar extends Component {
  render() {
    return (
      <div>
<div className='navbar'>
  <div className='main_text'>
    <p>О нас</p>
    <span><FaMapMarkerAlt/>Ташкент</span>
  </div>
    <div className='navbarbody'>
       <span> <BsTelephone/>+99896487223</span>
       <span><p className='zakazat'>Заказать звонок</p></span>
    </div>
    <div className='navbarheader'>
    <img src={logo} alt=""className='logo-img'/>
    </div>
     </div>
      </div>
    )
  }
}
