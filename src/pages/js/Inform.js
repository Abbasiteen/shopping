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
            <div className='inform_main'>
                <div className='form'>
                    <div className='name'>
                    <p className='form_name'>Имя</p>
                    <input className='input' placeholder='Diyor' />
                    </div>
                <div className='lastname'>
                    <p className='form_lastname'>Фамилия</p>
                    <input className='input' placeholder='Abdusalomov' />
                </div>
                <div className='num'>
                    <p className='form_num'>Телефонный номер</p>
                    <input className='input' type={'number'} placeholder='+998943048710' />
                </div>
                <div className='mail'>
                    <p className='form_email'>электронной почты</p>
                    <input className='input' type={'email'} placeholder='diyorbekabdusalomov05@gmail.com' />
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
                    <p>40 418 474.34 сум</p>
                    <p>-14 145 394 сум</p>
                    <p>26 273 080.34 сум</p>
                </div>
                </div>
                <div className='card_end1'>
                    <p>Нажимая 'Оформить заказ', я соглашаюсь с публичным договором оферты</p>
                </div>
                <div className='card_end2'><p>Для расчета стоимости доставки крупногабаритного товара весом более 5 кг обращайтесь к оператору Call-центра*
* Может взыматься дополнительная плата за доставку в труднодоступные места, (например крупногабаритная техника, которую нужно доставить в дома, с неработающим лифтом)
** При необходимости</p>
                </div>
                </div>
            </div>
        </div>
      </div> 
    )}
}