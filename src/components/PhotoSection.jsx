import React from 'react'
import logo from '../img/logo.png'
import {FaGithub,FaSlack,FaFacebook,FaTwitter } from 'react-icons/fa';
import VerticalLine from './VerticalLine';

function PhotoSection() {
  return (
    <div className='photo_section'>
     <div className='photo'>
     <img style={{width:'30rem'}}src={logo}/>
     </div>
    <div className='detail'>
        <h2>
        Ryan Adlard
        </h2>
        <p className="text">Freelancer</p>
    </div>
    <div className='photo_icons'>
        <div className='photo_icon'><FaGithub/></div>
        <div className='photo_icon'>< FaSlack/></div>
        <div className='photo_icon'> <FaFacebook/></div>
        <div className='photo_icon'> <FaTwitter/></div>
    </div>
    <hr style={{opacity:'0.2'}}/>
    <VerticalLine/>
    <div className='photo_footer'>
        <div>
            <h3>Download CV</h3>
        </div>
        <div>
            <h3>Hire Me</h3>
        </div>
     </div>
    </div>
   
  )
}

export default PhotoSection
