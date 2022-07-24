import React, { Component } from 'react'
import Select from 'react-select';
import { TbShoppingCartPlus } from 'react-icons/tb'
import { TiArrowLeftThick } from 'react-icons/ti'

import '../css/Xit.css'

const options = [
    { value: '1 шт.', label: '1шт.' },
    { value: '2 шт.', label: '2 шт.' },
    { value: '3 шт.', label: '3 шт.' }
  ]

const cards=require("../js/json")
export default class Error extends Component {
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
  
        var storedNames = JSON.parse(localStorage.getItem("names"));
        console.log(storedNames);
      }
      componentDidMount(){
      
      }
  render() {
    return (
      <div>
        <a href='/'>
            <div className='Xit_title'>
                <span className='TiArrowLeftThick'><TiArrowLeftThick/></span>
                    <p className='Xit_title_t'>Хиты продаж</p>
            </div>
        </a>
        <div className='Xit_cards'>
      {this.state.data.map(item=>{ 
        return <div className='Xit_card'>
            <img src={item.Image} alt='' className='card_imgg'/>
            <p className='card_names'>{item.name}</p>
            <p className='prices'>{item.price}</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='card_amounts' options={options} />
              <div className='card_btnn' onClick={()=>this.shop(item.name,item.Image,item.price,item.skidka)}>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>})} 
        </div>
      </div>
    )
  }
}
