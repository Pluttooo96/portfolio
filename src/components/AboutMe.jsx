import React, { useState, useEffect } from 'react';
import { Button } from './Button.jsx';
import './AboutMe.css';
import { useLocation } from 'react-router-dom';
import data from "../data/data.json";

const AboutMe = () => {

    const [mobile, setMobile] = useState(true)
    const location = useLocation()
    

    const showLaptop = () => {
        if (window.innerWidth < 960) {
            setMobile(false);     
          } else {
            setMobile(true);
          }
        };

    useEffect(() => {
        showLaptop();
      }, []);

    window.addEventListener('resize', showLaptop);
    
    return(
        <div className='about'>
            <div className='about__title'>Hello I'm <span>Michał</span>, Front End Developer</div>
            <div className='about__para'>
              <p className='about__p1'>{data[(data.length)-1].p1}</p>
              <p className='about__p2'>{data[(data.length)-1].p2}</p>
              <p className='about__p3'>{data[(data.length)-1].p3}</p>
              <p className='about__p4'>{data[(data.length)-1].p4}</p>
              <p className='about__p5'>{data[(data.length)-1].p5}</p>
              {mobile ? <img className='about__laptop' src='./laptop.png' alt='about-laptop' /> : null}
            </div>
            {location.pathname!=='/about' ?
            <Button 
              buttonSize={ !mobile ? 'btn--desktop--bigger' : 'btn--mobile--bigger'} 
              buttonStyle='btn--outline' 
              > Get in touch!</Button> : null
              }
            <div className='about__skills'> My skills and <span> tools</span></div>
            <img 
              className='about__icons' 
              src='./skills.svg' 
              alt='skills' />          
        </div>

    )
}

export default AboutMe;