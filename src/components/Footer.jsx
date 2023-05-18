import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <div className='footer'>
            <img className='footer__line' src='./line.svg' alt='line' />
            <ul className='footer__contact'>
                <li className='footer__item'>
                   <a href={'https://www.linkedin.com/in/micha%C5%82-pustu%C5%82-02632b261/'} target='_blank' rel='noreferrer'><img src='./github.svg' alt='github' /></a>
                </li>
                <li className='footer__item'>
                    <a href={'https://github.com/Pluttooo96'} target='_blank' rel='noreferrer'><img src='./linkedin.svg' alt='linkedin' /></a>
                </li>
                <li className='footer__item'>
                    <img src='./email.svg' alt='e-mail' />
                </li>
                <li className='footer__item' >mpustul96@gmail.com</li>
            </ul>
        </div>
    )
};

export default Footer;
