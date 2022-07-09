import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import { TbShoppingCartPlus } from 'react-icons/tb'
import card_img from '../img/camera.png'
import carousel from '../img/carousel.png'
import camer from '../img/camer.png'
import apple from '../img/apple.png'
import samsung from '../img/samsung.png'
import huawe from '../img/huawe.png'
import artel from '../img/artel.png'
import mi from '../img/mi.png'
import Select from 'react-select'
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='main'>
          <div className='main_carousel'>
          <Carousel>
  <Carousel.Item>
  <img className="d-block w-100" src={carousel} alt="Second slide"/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={carousel} alt="Second slide"/>
      
    

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={carousel} alt="Second slide"/>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
        </div>
        <div className='Новинки'>
          <p className='Новинки_title'>Новинки</p>
        <div className='Новинки_cards'>
          <div className='Новинки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='Новинки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='Новинки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
         <div className='Новинки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
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
          <div className='Скидки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_discounts'>12%</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='Скидки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_discounts'>12%</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='Скидки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_discounts'>12%</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='Скидки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_discounts'>12%</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
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
        <div className='xit_title'>
          <p className='xit_title_t'>Хиты продаж</p>
        </div>
        <div className='xit_cards'>
          <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='brend'>
          <h1 className='brend_t'>Популярные бренды</h1>
          <div className='brend_boxs'>
            <div className='brend_box'>
              <img src={apple} alt='' className='apple'/>
            </div>
            <div className='brend_box'>
              <img src={samsung} alt='' className='samsung'/>
            </div>
            <div className='brend_box'>
              <img src={huawe} alt='' className='huawe'/>
            </div>
            <div className='brend_box'>
              <img src={artel} alt='' className='artel'/>
            </div>
            <div className='brend_box'>
              <img src={mi} alt='' className='mi'/>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}
