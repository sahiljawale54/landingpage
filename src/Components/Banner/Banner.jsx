import React from 'react'
import './Banner.css';
import earth from '../../Images/save.png';
import {motion} from 'framer-motion';

const Banner = () => {
  const transition = {
    duration: 3,
    type: "spring",
  };
  return (
    <div className="container-fuild" id='banner'>
      <div className="row">

        <motion.div 
          initial={{ left: "-30rem"}}
          whileInView={{ left: "2rem" }}
          transition={transition} className="col-md-12 intro">

          <div
          className='col-md-12 content'>
            <span>Want to </span>
            <span>make Earth a</span>
            <span>better Place </span>
              <span>to live</span>
          </div>

          <button className='btn b-btn'>Join Us Now</button>

        </motion.div>
      </div>
    </div>
  )
}

export default Banner
