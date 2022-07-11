import React, { Component } from 'react'
import about from '../img/about.png'
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

      </div>
    )
  }
}
