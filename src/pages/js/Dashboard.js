import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import { TbShoppingCartPlus } from 'react-icons/tb'
import card_img from '../img/camera.png'
import carousel from '../img/carousel.png'
import camer from '../img/camer.png'
import Select from 'react-select';

import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const options = [
  { value: '1 шт.', label: '1шт.' },
  { value: '2 шт.', label: '2 шт.' },
  { value: '3 шт.', label: '3 шт.' }
]
const cards=require("../js/json")
export default class Dashboard extends Component { 
  state={
      data:cards,
      buy:[]
    }
    shop=(name,img,price,skidka)=>{
      var push=true;
      var data1={
      "name":name,
      "img":img,
  "price":price,
  "skidka":skidka,
  "count":1
}
if(this.state.buy[0]==undefined){
push=true;
}else{
for(var i=0; i<this.state.buy.length;i++){
  if(this.state.buy[i].name===data1.name){
     this.state.buy[i].count++
     push=false;
  }
}
}
if(push){
  this.state.buy.push(data1)
}
      localStorage.setItem("names", JSON.stringify(this.state.buy));
    }
    componentDidMount(){
   if (JSON.parse(localStorage.getItem("names"))!==null){
     this.setState({buy: JSON.parse(localStorage.getItem("names"))})
   }
  //  console.log(this.shop)
    }
  render() {
   
    return (
      <div>
        <div className='main'>
          <div className='main_carousel'>
          <Carousel>
  <Carousel.Item>
  <img className="d-block w-100" src={carousel} alt="Second slide"/>

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={carousel} alt="Second slide"/>
      
    

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={carousel} alt="Second slide"/>

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
        </div>
        <div className='Новинки'>
          <div className='new_t'>
          <p className='Новинки_title'>Новинки</p>
          < div className = 'Новинки_link' >
            <a href='/News'> Все товары в категории </a>
          </ div>
          </div>

        <div className='Новинки_cards'>
      {this.state.data.map((item, key)=>{ 
        if(key<4){return <div className='Новинки_card'>
            <img src={item.Image} alt='' className='card_imgg'/>
            <p className='card_names'>{item.name}</p>
            <p className='prices'>{item.price}</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='card_amounts' options={options} />
              <div className='card_btnn' onClick={()=>this.shop(item.name,item.Image,item.price,item.skidka)}>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>}})} 
        </div>
        </div>
        <div className='Скидки'>
        <div className='Скидки_t'>
          <div className='Скидки_title'>
            <p className='Скидки_title_t'>Скидки</p>
            <p className='Скидки_title_i'>%</p>
          </div>
          < div className = 'Скидки_cards_all' >
            <a href='/All'> Все товары в категории </a>
          </ div>
        </div>
        <div className='Скидки_cards'>
            {this.state.data.map((item,key) => {
               if(key<4){ return <div className='Новинки_card'>
                <img src={item.Image} alt='' className='card_imgg' />
                <p className='card_names'>{item.name}</p>
                <p className='prices'>{item.price}</p>
                <div className='card_footer'>
                  <Select placeholder='1шт.' className='card_amounts' options={options} />
                  <div className='card_btnn' onClick={() => this.shop(item.name, item.Image, item.price, item.skidka)}>
                    <button className='btnn'><TbShoppingCartPlus /></button>
                  </div>
                </div>
              </div>
            }})}  

        </div>
        </div>
        <div className='famous'>
          <p className='famous_title'>Популярные категории</p>
          <div className='famous_cards'>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
            <div className='camer_card'>
              <img src={camer} alt='' className='camer'/>
              <p className='camer_text'>Фотоаппараты</p>
            </div>
          </div>
        </div>
        <div className='xit'>
          <div className='xit_t'>
        <div className='xit_title'>
          <p className='xit_title_t'>Хиты продаж</p>
        </div>
        < div className = 'xit_links' >
            <a href='/xit'> Все товары в категории </a>
          </ div>  
          </div>

        <div className='xit_cards'>
          
          {this.state.data.map((item,key)=>{
            if(key<4){return <div className='xit_card'>
            <img src={item.Image} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names_x'>{item.name}</p>
            <p className='prices'>{item.price}</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='card_amounts' options={options} />
              <div className='card_btnn' onClick={() => this.shop(item.name, item.Image, item.price, item.skidka)}>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
            </div>
            
            }
          })}
        </div>
        </div>

      </div>
    )
  } 
}
