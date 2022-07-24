import React, { Component } from 'react'
import { TiArrowLeftThick } from 'react-icons/ti'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import ordered from '../img/order.png'
import '../css/Basket.css'
export default class Error extends Component {
  state={
    buy:[],
    totalprice:[],
    totalcount:[]
  }
  plus=(key)=>{
    this.state.buy[key].count++;
    this.setState({})
    localStorage.setItem("names", JSON.stringify(this.state.buy));
        this.totalprice()

  }
  minus=(key)=>{
    this.state.buy[key].count--;
    if(this.state.buy[key].count<=0){
this.state.buy.splice(key,1)
    }
    this.setState({})
    localStorage.setItem("names", JSON.stringify(this.state.buy));
        this.totalprice()
    }
  totalprice=()=>{
    var a= 0
    for (let i = 0; i < this.state.buy.length; i++) {
      a=a+this.state.buy[i].price*this.state.buy[i].count
    }
    this.setState({totalprice:a})
  }

   totalcount = () => {
     var b = 0
     for (let i = 0; i < this.state.buy.length; i++) {
       b = b + this.state.buy[i].count
     }
     this.setState({totalcount:b.toFixed})
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
      }, 100);
    }
  render() {
    return (
      <div>
        <div className='Basket'>
              < div className = 'order_title' >
                <a href='/'>
                  <span className='TiArrowLeftThick'><TiArrowLeftThick/></span>
                  <p className='basket_title_t'>Товары</p>
                </a>
                <p className='order_amount' >{this.state.buy.length}предмета</p>
              </div>
        
          <div className='order_main'>
            <div className='order_main_l'>
            <div className='main_l_header'>
              <div className='header_t'>
                <p>PRODUCT DETAILS</p>
              <div className='main_header_text'>
                <p>AMOUNT</p>
                <p>PRICE</p>
                <p>TOTAL</p>
              </div>
              </div>

                {this.state.buy.map((item,key)=>{
                return <div className='ordered'>
                  <div className='ordered_img'>
                    <div className='ordered_i'>
                      <img src={ordered} alt=''/>
                      <p>x</p>
                    </div>
                    <p className='product_name'>{item.name}</p>
                  <div className='amount_btn' style={{color: '#359740'}}>              
                    <span onClick={()=> this.plus(key)}><AiOutlinePlusCircle /></span>
                      <p>{item.count}</p>
                    <span onClick={()=> this.minus(key)} > < AiOutlineMinusCircle/> </span>
                  </div>
                  <div className='ordered_amount'>
                      <p>{item.price.toFixed(2)}</p>
                  </div>
                  <div className='ordered_amount'>
                      <p>{item.price*item.count.toFixed(2)}</p>
                  </div>
                   </div>
                </div>
                  
                

                

            

         
                })}

           </div>
         </div>
            <div className='order_main_r'>
              <div className='order_card'>
                <h1 className='order_t'>Итог заказа</h1>
                <div className='order_text'>
                  <p>{this.state.buy.length} ПУНКТА</p>
                  <p style={{fontWeight: ' bold'}}>{this.state.totalprice}</p>
                </div>
                <div className='card_texts'>
                <div className='card_1'>
                    <p>Товары, {this.state.totalcount} шт.</p>
                    <p>Скидка</p>
                    <p>Общая сумма:</p>
                </div>
                <div className='card_2'>
                    <p>40 418 474.34 сум</p>
                    <p>-14 145 394 сум</p>
                    <p>26 273 080.34 сум</p>
                </div>
                </div>
                <div className='order_c_end1'>
                    <p>Итого</p>
                    <p>62 392,23 Сум</p>
                </div>
                <a className='order_btn_a' href='/Inform'>
                  <button className='order_btn'>Продолжать</button>
                </a>
            </div>
          </div>

    </div>
    </div>
      <div/>
    </div>
    )
  }
}
