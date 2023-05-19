import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import menu from './images/menu.svg'
import home from './images/home.svg'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const showButton = () => {
        if (window.innerWidth > 960) {
            setButton(false);
            }else {
            setButton(true);
            closeMobileMenu()
            }
            if(window.innerWidth>960){
                document.body.style.overflowY = 'visible';
                document.body.style.position = ''
            }
        }; 

    const handleClick = () => {
        setClick(!click);
        if(!click){
            document.body.style.overflowY = 'hidden';
            document.body.style.position = 'fixed'
        }else{
            document.body.style.overflowY = 'visible';
            document.body.style.position = ''
        }
    }

    const closeMobileMenu = () => {
        setClick(false);
        document.body.style.overflowY = 'visible';
        document.body.style.position = ''
    }

    const cv = 'https://drive.google.com/file/d/1TD4QZumQu1iDF5D0UKkt2ixXo-PWketu/view?usp=share_link'

    const goTo = (url) => {
        window.open(url, '_blank')
    }


    useEffect(() => {
        showButton();
      },[]);

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <Link
                    to='/'
                    >
                    <img 
                        className="navbar__home" 
                        src={home}
                        alt='home'/>
                </Link>
                <ul className={click ? "navbar__menu--active" : "navbar__menu"}>
                    <li className="navbar__item">
                        <Link 
                            to='/about' 
                            className='navbar__redir'
                            onClick={closeMobileMenu}
                            >
                            About me
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            to='/projects' 
                            className='navbar__redir'
                            onClick={closeMobileMenu}
                            >
                            Projects
                        </Link>
                    </li>
                    <li className="navbar__item">
                    {button && 
                    <Button 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--mobile--bigger' 
                        onClick={()=> goTo(cv)}>DOWNLOAD CV</Button>}
                    </li>
                </ul>
                {!button && 
                <Button 
                    buttonStyle='btn--main' 
                    buttonSize='btn--desktop--smaller' 
                    onClick={()=> goTo(cv)}>DOWNLOAD CV</Button>}
                {button && 
                <img 
                    className="navbar__menu--btn" 
                    src={menu} alt='burger-menu' 
                    onClick={()=>handleClick()}
                />}         
            </nav>
        </>
        );
}
export default Navbar;