import React, { Component } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import logo from '../img/logo.png'
import apple from '../img/apple.png'
import samsung from '../img/samsung.png'
import huawe from '../img/huawe.png'
import artel from '../img/artel.png'
import mi from '../img/mi.png'
import {BiHomeAlt} from 'react-icons/bi'
import { TbLayoutGrid } from 'react-icons/tb'
import { RiShoppingCartLine } from 'react-icons/ri'
import { CgMenuLeft } from 'react-icons/cg'
// import { BsTelephoneFill, BsInstagram, BsTwitter } from "react-icons/bs"
// import { FaFacebookF } from "react-icons/fa"
// import app from "../img/XMLID_228_.png"
// import sam from "../img/samsung.png"
// import hua from "../img/huave.png"
// import mi from "../img/mi.png"
// import img from "../img/footer.png"
import '../css/Footer.css'
// import { padding } from '@mui/system'
    const openModal=()=> {
      document.querySelector(".modal1").classList.toggle("open_modal");
    }
export default class Footer extends Component {
  render() {

    return (
      <div>
      
        <section className='brends'>
          <h1 className='brends_title'>Популярные бренды</h1>

          <div className='brends_box'>
            <div className='brend_app'>
              <img src={apple} alt />
            </div>
            <div className='brend_sam'>
              <img src={samsung} alt />
            </div>
            <div className='brend_hua'>
              <img src={huawe} alt />
            </div>
            <div className='brend_artel'>
              <h6 className='brend_artel_text'>artel</h6>
            </div>
            <div className='brend_mi'>
              <img src={mi} alt />
            </div>
          </div>
        </section>     
        {/* <div className='brend'>
          <h1 className='brend_t'></h1>
          <div className='companylogo'>
          <div className='asas'>
          <img src={apple} alt='' id="ss" />
            </div>
             <div className='asas'>
          <img src={samsung} alt='' />
            </div>
             <div className='asas'>
          <img src={huawe} alt='' />
            </div> 
            <div className='asas'>
                <img src={artel} alt='' />
            </div> 
            <div className='asas'>
                <img src={mi} alt='' id='ss' />
            </div> 
</div>
 </div> */}
        <footer className='main_f'>
          <div className='footer'>
            <div className='footer_links'>
              <p>Иинформация</p>
              <hr/>
              <ul className='footer_ul'>
                <li>О нас</li>
                <li>Условия использования</li>
                <li>Оплата и доставка</li>
                <li>Как заказать</li>
                <li>Вопросы и ответы</li>
              </ul>
            </div>
            <div className='footer_links'>
              <p>Иинформация</p>
              <hr/>
              <ul className='footer_ul'>
                <li>О нас</li>
                <li>Условия использования</li>
                <li>Оплата и доставка</li>
                <li>Как заказать</li>
                <li>Вопросы и ответы</li>
              </ul>
            </div>
            <div className='footer_card'>
              <div className='tel_p'>
              <div className='tel'>
                <div className='tel_i'>
                  <span><BsFillTelephoneFill/></span>
                </div>
                <p className='tel_t'>+99894 304 87 10</p>
              </div>
              <button className='tel_btn'>ЗАКАЗАТЬ ЗВОНОК</button>
              </div>
              <div className='footers_f'>
                <div className='footer_l'>
              <div className='footer_text'>
                <p >Yunusobod tumani -22 kvartal</p>
                <p>Эл.почта: webdesigner@gmail.com</p>
              </div>
              <div className='f_input'>
                <input className='footer_inputs' placeholder='Поиск'/>
                {/* <span className='FiSearch'><FiSearch/></span>  */}
              </div>
              </div>
              <div className='footer_icons'>
                <span><FaFacebookF/></span>
                <span><BsInstagram/></span>
                <span><BsTwitter/></span>
              </div>
              </div>
            </div>
          </div>
          <span className='f_hr'><hr/></span>
          <div className='footer_end'>
          
            <div className='f_logo'>
              <img src={logo} alt=""className='f_logo'/>
            </div>
            <p className='footer_p'>© 2022 Lift Media. All Rights Reserved. </p>
          </div>
        </footer>

        <footer className='second_footer'>
            <div className='f_logo'>
              <img src={logo} alt=""className='f_logo'/>
            </div>
            <div className='footer_links2'>
            <div className='footer_link2'>
              <p>Иинформация</p>
              <hr/>
              <ul className='footer_ul'>
                <li>О нас</li>
                <li>Условия использования</li>
                <li>Оплата и доставка</li>
                <li>Как заказать</li>
                <li>Вопросы и ответы</li>
              </ul>
            </div>
            <div className='footer_link2'>
              <p>Иинформация</p>
              <hr/>
              <ul className='footer_ul'>
                <li>О нас</li>
                <li>Условия использования</li>
                <li>Оплата и доставка</li>
                <li>Как заказать</li>
                <li>Вопросы и ответы</li>
              </ul>
            </div>
            </div>
            <div className='footer_card2'>
              <div className='tel2_p'>
              <div className='tel'>
                <div className='tel_i'>
                  <span><BsFillTelephoneFill/></span>
                </div>
                <p className='tel_t'>+99894 304 87 10</p>
              </div>
              <button className='tel_btn'>ЗАКАЗАТЬ ЗВОНОК</button>
              </div>
              <div className='footers_f2'>
                <div className='footer_l'>
              <div className='footer_text'>
                <p >Yunusobod tumani -22 kvartal</p>
                <p>Эл.почта: webdesigner@gmail.com</p>
              </div>
              <div className='f_input'>
                <input className='footer_inputs' placeholder='Поиск'/>
                {/* <span className='FiSearch'><FiSearch/></span>  */}
              </div>
              </div>
              <div className='footer2_icons'>
                <span><FaFacebookF/></span>
                <span><BsInstagram/></span>
                <span><BsTwitter/></span>
              </div>
              </div>
            </div>
          <div className='footer_end'>
          

          </div>
        </footer>

        <div className='footer_menu'>
          <a href='/'><BiHomeAlt/>Главная</a>
          <a href='#!' onClick={openModal}><TbLayoutGrid/>Каталог</a>
          <a href='/Ordered'><RiShoppingCartLine/>Карзина</a>
          <a href='/'><CgMenuLeft/>Меню</a>
        </div>
        <div className='modal1'>
         <ul>
          <li><a href='/'>Main</a></li>
          <li><a href='/Contact'>Contact</a></li>
          <li><a href='/About'>About</a></li>
          <li><a href='/Inform'>Inform</a></li>
          <li><a href='/products'>products</a></li>
         </ul>
      </div>
      </div>
    )
  }
}
