import React, { useEffect, useState } from 'react';
import './Hero.css';
import { Button } from "./Button";
import laptop from './images/laptop.png'
import skills from './images/skills.svg'


const Hero = () =>{

    const [mobile, setMobile] = useState(true)
   

    const showLaptop = () => {
        if (window.innerWidth < 960) {
            setMobile(false);     
          } else {
            setMobile(true);
          }
        };

    const goTo = (url) =>{
      window.open(url,'_blank')
    }

    useEffect(() => {
        showLaptop();
      }, []);

    window.addEventListener('resize', showLaptop);


    return(
        <div className='hero'> 
            <div className='hero__title'>Hello! <br /> I'm <span>Michał</span>, Front End Developer</div>
            <div className='hero__info'>I’m currently located in Wroclaw, Poland, but I can work remotely. Interested in the entire frontend spectrum and still learning and developing my skills.</div>
            <Button 
              className='button' 
              buttonSize={!mobile ? 'btn--mobile--bigger' : 'btn--desktop--bigger'} 
              buttonStyle='btn--outline'
              onClick={()=>goTo('https://www.linkedin.com/in/micha%C5%82-pustu%C5%82-02632b261/')}
              > 
              Get in touch!</Button>
            <div className='hero__skills'>
                <div className='skills__text'>My skills and <span>tools</span></div>
                <img className='skills__icons' src={skills} alt='skills' />
            </div>
            { mobile ? <img className='hero__laptop' src={laptop} alt='hero-laptop' /> : null}
        </div>
    )
};

export default Hero;