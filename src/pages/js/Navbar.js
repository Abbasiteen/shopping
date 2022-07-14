import React, { Component } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiMenu4Line } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../img/logo.png'
import '../css/Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div>
<div className='navbars'>
  <div className='main_textss'>
    <p>О нас</p>
    <span><FaMapMarkerAlt/>Ташкент</span>
  </div>
    <div className='navbarbodys'>
       <span> <BsTelephone/>+99896487223</span>
       <span><p className='zakazat'>Заказать звонок</p></span>
    </div>
  <div className='navs'>
    <div className='logo'>
      <img src={logo} alt=""className='logo-img'/>
    </div>
    <div className='katalog'>
      <span className='menu'><RiMenu4Line/></span>
      <p>Каталог</p>
    </div>
    <div className='inputs'>
      <input className='header_inputs' placeholder='Что желаете найти?'/>
      <span className='FiSearch'><FiSearch/></span> 
    </div>
    <div className='basket'>
      <span><AiOutlineShoppingCart/></span>
      <p>Корзина</p>
    </div>
  </div>
</div>
<div className='navbar_2'>
      <div className='nav_phone'>
            <div className='nav_logo'>
              <img src={logo} alt="" className='logo2-img' />
            </div>
          <div className='nav_text'>
            <p>О нас</p>
            <span><FaMapMarkerAlt />Ташкент</span>
          </div>

      </div>
      <div className='down_nav'>
      <div className='nav_input'>
            <input className='nav_search' placeholder='Что желаете найти?' />
            <span className='FiSearch2'><FiSearch/></span> 
      </div>
      <select id='language'>
        <option>Uzb</option>
        <option>Eng</option>
        <option>Rus</option>
      </select>
      </div>
</div>
      </div>

    )
  }
}
