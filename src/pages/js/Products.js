import React, { Component } from 'react'
import  product1  from '../img/product1.png'
import  product2 from  '../img/producrs2.png'
import { TiArrowLeftThick } from 'react-icons/ti'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import '../css/Products.css'
export default class Error extends Component {
  render() {
    return (
      <div>
        <div className='products'>
          <div className='products_title'>
              <a href='/'>
                <span className='TiArrowLeftThick'><TiArrowLeftThick/></span>
                <p className='products_title_t'>Товары</p>
              </a>
          </div>
          <div className='products_main'>
          <div className='products_imgs'>
            <div className='products_img1'>
              <img src={product2} />
              <img src={product2} />
            </div>
            <img src={product1} />

          </div>
          <div className='products_right'>
            <p style={{fontWeight:'bold'}}>VINTER 2020 ВИНТЕР 2020</p>
            <p>Арт. 890.321.44 <span style={{color: '#7D7D7D'}}>/ Под заказ на 4.04.2021</span> </p>
            <p style={{color: '#7D7D7D'}}>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
            <div className='product_price'>
              <p style={{marginTop: '7%', fontWeight:'bold'}}>62 392,31 Сум</p>
              <div className='amount_btn' style={{color: '#359740'}}>              
                <span><AiOutlinePlusCircle /></span>
                  <p>1</p>
                <span > < AiOutlineMinusCircle/> </span>
              </div>

            </div>
            <button className='push_busket'>Добаить в корзину +</button>

          </div>
          </div>

        </div>
      </div>
    )
  }
}

