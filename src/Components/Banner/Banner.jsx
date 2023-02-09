import React from 'react'
import './Banner.css';
import earth from '../../Images/save.png';

const Banner = () => {
  return (
    <div className="container-fuild" id='banner'>
      <div className="row">

        <div className="col-md-12 intro">

          <div className='col-md-12 content'>
            <span>Want to </span>
            <span>make Earth a</span>
            <span>better Place </span>
              <span>to live</span>
          </div>

          <button className='btn b-btn'>Join Us Now</button>

        </div>
      </div>
    </div>
  )
}

export default Banner
