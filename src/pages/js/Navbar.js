import React, { Component } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiMenu4Line } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai';
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
  <div className='nav'>
    <div className='logo'>
      <img src={logo} alt=""className='logo-img'/>
    </div>
    <div className='katalog'>
      <span><RiMenu4Line/>Каталог</span>
    </div>
    <div className='input'>
      <input className='header_input' placeholder='Что желаете найти?'/>
      <span className='FiSearch'><FiSearch/></span> 
    </div>
    <div className='basket'>
      <span><AiOutlineShoppingCart/>Корзина</span>
    </div>
  </div>
</div>

      </div>
    )
  }
}
