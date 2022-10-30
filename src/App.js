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
import card_img from '../src/pages/img/camera.png'
import card_btn from '../src/pages/img/card_btn.png'
import { TbShoppingCartPlus } from 'react-icons/tb'
import {axios} from 'axios'
import Select from 'react-select';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../src/pages/css/Dashboard.css'
import './App.css'
const options = [
  { value: '1 шт.', label: '1шт.' },
  { value: '2 шт.', label: '2 шт.' },
  { value: '3 шт.', label: '3 шт.' }
]
const openModal=()=> {
  document.querySelector(".modal1").classList.toggle("open_modal");
}
const cards = require("./pages/js/json")
export default class App extends Component {
   state = {
     show: true, 
     cards:cards,
     data:cards,
     buy:[],
     card1:[]
   }
    getTokken=()=>{
      var data={
        "username": "admin",
        "password": "testing321"
      }
      axios.post(`http://shop.abrorjonaxmadov.uz/auth/v1/login/`, data).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }
       shop = (name, img, price, skidka) => {
         var push = true;
         var data1 = {
           "name": name,
           "img": img,
           "price": price,
           "skidka": skidka,
           "count": 1
         }
         if (this.state.buy[0] == undefined) {
           push = true;
         } else {
           for (var i = 0; i < this.state.buy.length; i++) {
             if (this.state.buy[i].name === data1.name) {
               this.state.buy[i].count++
               push = false;
             }
           }
         }
         if (push) {
           this.state.buy.push(data1)
         }
         localStorage.setItem("names", JSON.stringify(this.state.buy));
       }
       componentDidMount() {
         if (JSON.parse(localStorage.getItem("names")) !== null) {
           this.setState({
             buy: JSON.parse(localStorage.getItem("names"))
           })
         }
         //  console.log(this.shop)
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
      <span onClick={openModal} className='menu'><RiMenu4Line  /></span>
      <p>Каталог</p>
    </div>
    <div className='inputs'>
      <input className='header_inputs' onKeyUp={this.search} placeholder='Что желаете найти?'/>
      <span className='FiSearch'><FiSearch/></span> 
    </div>
    <div className='busket_text'>
      <a href='/Ordered'>
        <span><AiOutlineShoppingCart/></span>
        <p className='busket_text_p'>Корзина</p>
      </a>
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
      {/* <Dashboard/> */}


      <div className='modal1'>
         <ul>
          <li><a href='/'>Main</a></li>
          <li><a href='/Contact'>Contact</a></li>
          <li><a href='/About'>About</a></li>
          <li><a href='/Inform'>Inform</a></li>
          <li><a href='/products'>products</a></li>
         </ul>
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
        </Router>
        ):(
        <div>{ this.state.cards.map((item,key)=>{
          if (item.name.includes(document.querySelector('.header_inputs').value)) {
            return <div>
          <div className='all_cards'>
              <div className='xit_cards' style={{display: 'flex'}}>
              <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg' />
            {/* <img src={item.Image} alt='' className='card_imgg'/> */}
            <p className='card_xit'>Хит</p>
            <p className='card_names_x'>{item.name}</p>
            <p className='prices'>{item.price}</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='card_amounts' options={options} />
              <div className='card_btnn' onClick={() => this.shop(item.name, item.Image, item.price, item.skidka)}>
                <img src={card_btn} className='btnn' />
              </div>
              </div>
              </div>
              </div>
          </div>
          </div>
          }
        })
        }</div>
      
      )}
      <button onClick={()=>{ this.getTokken() }}>token</button>
      {/* <About/>
      <Contact/>
      <Inform/>
      <Ordered/>
      <Products/> */}
        <Footer/>
      </div>
    )
  }         
}
