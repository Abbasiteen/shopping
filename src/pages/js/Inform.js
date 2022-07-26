import React, { Component } from 'react'
import { TiArrowLeftThick } from 'react-icons/ti'
import '../css/Inform.css'
export default class Footer extends Component {
  state = {
      buy: [],
      totalprice: [],
      totalcount: 0,
      totals: 0
  }
 totalprice = () => {
     var a = 0
     for (let i = 0; i < this.state.buy.length; i++) {
         a = a + this.state.buy[i].price * this.state.buy[i].count
     }
     this.setState({
         totalprice: a.toFixed(2)
     })
 }
 totalSkidka = () => {
     var a = 0
     for (let i = 0; i < this.state.buy.length; i++) {
         a = a + (this.state.buy[i].price * this.state.buy[i].count * this.state.buy[i].skidka) / 100
     }
     this.setState({
         totals: a.toFixed(2)
     })
 }

 totalcount = () => {
     var b = 0
     for (let i = 0; i < this.state.buy.length; i++) {
         b = b + this.state.buy[i].count
     }
     this.setState({
         totalcount: b
     })
 }
    componentDidMount() {
      if (JSON.parse(localStorage.getItem("names")) !== null) {
        this.setState({
          buy: JSON.parse(localStorage.getItem("names"))
        })
      }
     
      
      setTimeout(() => {
        console.log(this.state.buy);
        this.totalprice()
        this.totalcount()
        this.totalSkidka()
      }, 100);
    }
  render() {
    return (
      <div>
        <div className='inform'>
        <a href='/Ordered'>
            <div className='inform_title'>
                <span className='TiArrowLeftThick'><TiArrowLeftThick/></span>
                <p className='inform_t'>Персональные данные</p>
            </div>
        </a>
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
                    <p>Товары,  {this.state.totalcount} шт.</p>
                    <p>Скидка</p>
                    <p>Общая сумма:</p>
                </div>
                <div className='card_2'>
                    <p>{this.state.totalprice}</p>
                    <p>-{this.state.totals} сум</p>
                    <p>{(this.state.totalprice-this.state.totals).toFixed(2)} сум</p>
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