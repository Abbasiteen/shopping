import React, { Component } from 'react';
// import {Carousel} from 'react-bootstrap';
import { TbShoppingCartPlus } from 'react-icons/tb'
import card_img from '../img/camera.png'
import Select from 'react-select'
import '../css/Dashboard.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <div className='main'>
          <div className='main_carousel'>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
        </div> */}
        <div className='Новинки'>
          <p className='Новинки_title'>Новинки</p>
        <div className='cards'>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
        </div>
        </div>
        <div className='Скидки'>
        <div className='Скидки_title'>
          <p className='Скидки_title_t'>Скидки</p>
          <p className='Скидки_title_i'>%</p>
        </div>
        <div className='Скидки_cards'>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_discount'>12%</p>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_discount'>12%</p>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_discount'>12%</p>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
          <div className='card'>
            <img src={card_img} alt='' className='card_img'/>
            <p className='card_discount'>12%</p>
            <p className='card_name'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='price'>62 392,23 Сум</p>
            <Select className='amount' options={options} />
            <div className='card_btn'>
              <button className='btn'><TbShoppingCartPlus/></button>
            </div>
          </div>
        </div>
        </div>
        <div className='famous'>
          <p className='famous_title'>Популярные категории</p>
        </div>
      </div>
    )
  } 
}
