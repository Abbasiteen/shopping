import React, { Component } from 'react'
import { TiArrowLeftThick } from 'react-icons/ti'
import '../css/Inform.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className='inform'>
            <div className='inform_title'>
                <span className='TiArrowLeftThick'><TiArrowLeftThick/></span>
                <p className='inform_t'>Персональные данные</p>
            </div>
            <div className='form'>
                <div className='name'>
                    <p className='form_name'>Имя</p>
                    <input placeholder='Diyor' />
                </div>
                <div className='lastname'>
                    <p className='form_lastname'>Фамилия</p>
                    <input placeholder='Abdusalomov' />
                </div>
                <div className='num'>
                    <p className='form_num'>Телефонный номер</p>
                    <input placeholder='+998943048710' />
                </div>
                <div className='mail'>
                    <p className='form_email'>электронной почты</p>
                    <input placeholder='diyorbekabdusalomov05@gmail.com' />
                </div>
                <button className='form_btn'>Отправить</button>
            </div>
            <div className='inform_card'>
                <h1 className='card_t'>Итого:</h1>
                <div className='card_texts'>
                <div className='card_1'>
                    <p>Товары, 4 шт.</p>
                    <p>Скидка</p>
                    <p>Общая сумма:</p>
                </div>
                <div className='card_2'>
                    <p>Товары, 4 шт.</p>
                    <p>Скидка</p>
                    <p>Общая сумма:</p>
                </div>
                </div>
            </div>

        </div>
      </div> 
    )}
}