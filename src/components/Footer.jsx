import React from 'react';
import './Footer.css';
import line from './images/line.svg';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';
import email from './images/email.svg';

const Footer = () =>{
    return(
        <div className='footer'>
            <img className='footer__line' src={line} alt='line' />
            <ul className='footer__contact'>
                <li className='footer__item'>
                   <a href={'https://www.linkedin.com/in/micha%C5%82-pustu%C5%82-02632b261/'} target='_blank' rel='noreferrer'><img src={github} alt='github' /></a>
                </li>
                <li className='footer__item'>
                    <a href={'https://github.com/Pluttooo96'} target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin' /></a>
                </li>
                <li className='footer__item'>
                    <img src={email} alt='e-mail' />
                </li>
                <li className='footer__item' >mpustul96@gmail.com</li>
            </ul>
        </div>
    )
};

export default Footer;
