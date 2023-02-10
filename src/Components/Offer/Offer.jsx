import React from 'react'
import kit from '../../Images/kit.png'
import './Offer.css';
import {motion} from 'framer-motion';

const Offer = () => {
  const transition = {
    duration: 3,
    type: "spring",
  };
  return (
    <div className="container-fuild" id="offer">
      
      <motion.div 
      initial={{left: "-300px"}}
      whileInView={{left :"3px"}}
      transition={transition}

      className="of-body col-md-12">
            <span>We present all new </span>
            <span>Sustainability Starter Kit</span>
      </motion.div>

      <motion.div 
      initial={{left: "350px"}}
      whileInView={{left :"3px"}}
      transition={transition}
      className="col-md-12 of-right">
            <img src={kit} alt="" />
      </motion.div>
        
    </div>
      
  )
}

export default Offer
