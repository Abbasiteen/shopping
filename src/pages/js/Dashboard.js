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
          <p className='Новинки_title'>Новинки</p>
        <div className='Новинки_cards'>
       {/* {cards.map(item=>{ 
        return <div className='Новинки_card'>
            <img src={item.Image} alt='' className='card_imgg'/>
            <p className='card_names'>{item.name}</p>
            <p className='prices'>{item.price}</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>})}  */}
          <div className='Новинки_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_names'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='amounts' options={options} />
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
              <Select placeholder='1шт.' className='amounts' options={options} />
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
              <Select placeholder='1шт.' className='amounts' options={options} />
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
              <Select placeholder='1шт.' className='amounts' options={options} />
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
              <Select placeholder='1шт.' className='amounts' options={options} />
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
              <Select placeholder='1шт.' className='amounts' options={options} />
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
              <Select placeholder='1шт.' className='amounts' options={options} />
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
              <Select placeholder='1шт.' className='amounts' options={options} />
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
            <p className='card_names_x'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names_x'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names_x'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
          <div className='xit_card'>
            <img src={card_img} alt='' className='card_imgg'/>
            <p className='card_xit'>Хит</p>
            <p className='card_names_x'>Cовместимость со вспышками — AD200/AD200Pro</p>
            <p className='prices'>62 392,23 Сум</p>
            <div className='card_footer'>
              <Select placeholder='1шт.' className='amounts' options={options} />
              <div className='card_btnn'>
                <button className='btnn'><TbShoppingCartPlus/></button>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    )
  } 
}
