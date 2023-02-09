import React from 'react'
import './Products.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay ,Pagination} from "swiper";
import "swiper/css/pagination";
import earbuds from '../../Images/earbuds.png';
import bamboo from '../../Images/bamboo.png';
import loofah from '../../Images/loofah.png';
import toothbrush from '../../Images/toothbrush.png';
import cup from '../../Images/cup.png';

const Products = () => {
  const products = [
    {
      img: earbuds,
      review:
        "1 box of 50 Bamboo Cotton Eartips",
    },
    {
      img: bamboo,
      review:
        "2 Bamboo Straws",
    },
    {
      img: loofah,
      review:
        "1 Natural Loofah"
    },
    {
      img: cup,
      review:
        "1 Plant Based Reusable Cup with 2 lids"
    },
    {
      img: toothbrush,
      review:
        "1 Bamboo Toothbrush",
    },
  ];
  return (
    <div className="container-fuild" id='products'>
      <div className="t-heading col-md-6">
        <span>Let's see what we have </span>
        <span>inside </span>
        <span>it....</span>

        <p className='t-body'>This starter kit is all you need to start the revolution. <br/>
        Consists of: 
        <ul>
        <li>2 Bamboo Straws</li>
        <li>1 Plant Based Reusable Cup with 2 lids</li>
        
        <li>1 Natural Loofah</li>
        <li>1 box of 50 Bamboo Cotton Eartips</li>
        <li>1 Bamboo Toothbrush</li>
        </ul></p>
      </div>
      
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
        loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
      >
        {products.map((products, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="silde">
                <img src={products.img} alt="" />
                <span>{products.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>

  )
}

export default Products
