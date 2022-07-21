import React, { Component } from 'react';
import { FiFacebook } from 'react-icons/fi'
import { ImGooglePlus } from 'react-icons/im'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TiArrowLeftThick } from 'react-icons/ti'
import contact from '../img/contact.png'
import contact_2 from '../img/contact_2.png'
import '../css/Contact.css'

export default class Dashboard extends Component {
    render() {
      return (
        <div>
            <div className='contact'>
                <div className='contact_t'>
                <h1 className='contact_title'>Контакты</h1>
                <div className='contact_links'>
                    <div className='links'>
                        <p>+ 375 434 847 28 84 </p>
                        <p>+ 375 448 473 09</p>
                        <p>designers@gmail.com</p>
                    </div>
                    <div className='links'>
                        <p>г.Юнусабад </p>
                        <p>Ул. Унверсам </p>
                        <p>Д. 1, Кв. 43</p>
                    </div>
                </div>
                    <div className='contact_icons'>
                        <button className='contact_icon'><AiOutlineLinkedin/></button>
                        <button className='contact_icon'><FiFacebook/></button>
                        <button className='contact_icon'><ImGooglePlus/></button>
                    </div>
                </div>
                <img src={contact} alt='' className='about_img' />
            </div>



            <div className='contact_2'>
                <div className='arrow_title'>
                    <span className='TiArrowLeftThick'><TiArrowLeftThick/></span>
                    <p className='arrow_t'>Контакты</p>
                </div>
                <img src={contact_2} alt='' className='about_img2' />
                <div className='contact_2_links'>
                    <div className='links_2'>
                        <p>+ 375 434 847 28 84 </p>
                        <p>+ 375 448 473 09</p>
                        <p>designers@gmail.com</p>
                    </div>
                    <div className='links_2'>
                        <p>г.Юнусабад </p>
                        <p>Ул. Унверсам </p>
                        <p>Д. 1, Кв. 43</p>
                    </div>

                </div>
                    <div className='contact_2_icons'>
                        <button className='contact_2_icon'><AiOutlineLinkedin/></button>
                        <button className='contact_2_icon'><FiFacebook/></button>
                        <button className='contact_2_icon'><ImGooglePlus/></button>
                    </div>
            </div>
        </div>
      )
    } 
  }
  