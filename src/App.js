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
import { BsTelephone } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiMenu4Line } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from './pages/img/logo.png'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
const cards = require("./pages/js/json")
export default class App extends Component {
   state = {
     show: true,
     cards:cards
   }
   search = () => {
     if (document.querySelector('.header_inputs').value === '') {
       this.setState({
         show: true
       })
     } else {
       this.setState({
         show: false
       })
     }
   }
  render() {
    const openModal=()=> {
      document.querySelector(".modal1").classList.toggle("open_modal");
    }
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
    <div className='katalog' onClick={openModal} >
      <span className='menu'><RiMenu4Line  /></span>
      <p>Каталог</p>
    </div>
    <div className='inputs'>
      <input className='header_inputs' onKeyUp={this.search} placeholder='Что желаете найти?'/>
      <span className='FiSearch'><FiSearch/></span> 
    </div>
    <a href='/Ordered'>
    <div className='basket'>
      <span><AiOutlineShoppingCart/></span>
      <p>Корзина</p>
    </div>
    </a>
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

      {this.state.show?(
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
        </Router>):(
        <div>{ this.state.cards.map((item,key)=>{
          if (item.name.includes(document.querySelector('.header_inputs').value)) {
            return <div>cards</div>
          }
        })
        }</div>
      
      )}
        <Footer/>
      </div>
    )
  }         
}
