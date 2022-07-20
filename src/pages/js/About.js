import React, { Component } from 'react'
import about from '../img/about.png'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbDiscount2 } from 'react-icons/tb'
import { AiOutlineSafety } from 'react-icons/ai'
import { MdOutlinePublishedWithChanges } from 'react-icons/md'
import { GiMoneyStack } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'

import '../css/About.css'
export default class About extends Component {
  render() {
    return (
      <div>
        <div className='about'>
            <div className='main'>
            <p className='main_title'>О магазине</p>
            {/* <View style={styles.verticleLine}></View> */}
            <div className='main_box'>
            <div className='main_box1'>
                <p className='box_p'>1800+</p>
                <p className='box_p1'>отзывов</p>
            </div>
            <div className='main_box2'>
                <p>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
            </div>
            </div>
            <div className='main_box'>
            <div className='main_box1'>
                <p className='box_p'>1800+</p>
                <p className='box_p1'>отзывов</p>
            </div>
            <div className='main_box2'>
                <p>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
            </div>
            </div>
            <div className='main_box'>
            <div className='main_box1'>
                <p className='box_p'>1800+</p>
                <p className='box_p1'>отзывов</p>
            </div>
            <div className='main_box2'>
                <p>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
            </div>
            </div>
            </div>
            <div className='about_img'>
                <img src={about} alt='' className='about_i' />
                <button className='about_btn'>наш магазин</button>
            </div>
        </div>
        <div className='why'>
          <h1 className='why_title'>Почему выбирают нас</h1>
        <div className='why_cards'>
        <div className='why_card'>
            <button className='why_icon'><TbTruckDelivery/></button>
            <p className='why_p1'>Доставка за 4 часа по Узбекистану</p>
            <p className='why_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_card'>
            <button className='why_icon'><TbTruckDelivery/></button>
            <p className='why_p1'>Лучшая цена на рынке</p>
            <p className='why_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_card'>
            <button className='why_icon'><TbTruckDelivery/></button>
            <p className='why_p1'>Пожизненная гарантия</p>
            <p className='why_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_card'>
            <button className='why_icon'><TbTruckDelivery/></button>
            <p className='why_p1'>Вернем деньги если не понравится</p>
            <p className='why_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_card'>
            <button className='why_icon'><TbTruckDelivery/></button>
            <p className='why_p1'>Любые способы оплаты</p>
            <p className='why_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_card'>
            <button className='why_icon'><TbTruckDelivery/></button>
            <p className='why_p1'>Эксперты</p>
            <p className='why_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}