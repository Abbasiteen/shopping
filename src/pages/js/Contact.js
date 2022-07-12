import React, { Component } from 'react';
import { FiFacebook } from 'react-icons/fi'
import { ImGooglePlus } from 'react-icons/im'
import contact from '../img/contact.png'
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
                <button><FiFacebook/></button>
                <button><ImGooglePlus/></button>
                </div>
                </div>
                <img src={contact} alt='' className='about_img' />
                
            </div>
        </div>
      )
    } 
  }
  