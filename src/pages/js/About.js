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

        {/* about_2 */}

        <div className='about_2'>
            <div className='main_2'>
            <p className='main_title_2'>О магазине</p>
            <div className='about_img_2'>
                <img src={about} alt='' className='about_i_2' />
                <button className='about_btn_2'>наш магазин</button>
            </div>
            {/* <View style={styles.verticleLine}></View> */}
            <div className='main_box_2'>
            <div className='main_box1_2'>
                <p className='box_p'>1800+</p>
                <p className='box_p1'>отзывов</p>
            </div>
            <div className='main_box2_2'>
                <p>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
            </div>
            </div>
            <div className='main_box_2'>
            <div className='main_box1_2'>
                <p className='box_p'>1800+</p>
                <p className='box_p1'>отзывов</p>
            </div>
            <div className='main_box2_2'>
                <p>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
            </div>
            </div>
            <div className='main_box_2'>
            <div className='main_box1_2'>
                <p className='box_p'>1800+</p>
                <p className='box_p1'>отзывов</p>
            </div>
            <div className='main_box2_2'>
                <p>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
            </div>
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
          <div className='why_2'>
          <h1 className='why_2_title'>Почему выбирают нас</h1>
        <div className='why_2_cards'>
        <div className='why_2_card'>
            <button className='why_2_icon'><TbTruckDelivery/></button>
            <p className='why_2_p1'>Доставка за 4 часа по Узбекистану</p>
            <p className='why_2_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_2_card'>
            <button className='why_2_icon'><TbTruckDelivery/></button>
            <p className='why_2_p1'>Лучшая цена на рынке</p>
            <p className='why_2_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_2_card'>
            <button className='why_2_icon'><TbTruckDelivery/></button>
            <p className='why_2_p1'>Пожизненная гарантия</p>
            <p className='why_2_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_2_card'>
            <button className='why_2_icon'><TbTruckDelivery/></button>
            <p className='why_2_p1'>Вернем деньги если не понравится</p>
            <p className='why_2_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_2_card'>
            <button className='why_2_icon'><TbTruckDelivery/></button>
            <p className='why_2_p1'>Любые способы оплаты</p>
            <p className='why_2_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
          <div className='why_2_card'>
            <button className='why_2_icon'><TbTruckDelivery/></button>
            <p className='why_2_p1'>Эксперты</p>
            <p className='why_2_p2'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt. </p>
          </div>
        </div>
        </div>
            

        </div>

      </div>
    )
  }
}
