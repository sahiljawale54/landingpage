import React from 'react'
import kit from '../../Images/kit.png'
import './Offer.css';

const Offer = () => {
  return (
    <div className="container-fuild" id="offer">
      
      <div className="o-body col-md-12">
            <span>We present all new </span>
            <span>    Sustainability Starter Kit</span>
      </div>

      <div className="col-md-12 o-right">
            <img src={kit} alt="" />
      </div>
        
    </div>
      
  )
}

export default Offer
