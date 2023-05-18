import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const styles = ['btn--main', 'btn--outline']
const sizes = ['btn--desktop--smaller','btn--desktop--bigger', 'btn--mobile--smaller', 'btn--mobile--bigger']

export const Button = ({
    children,
    loc,
    onClick,
    buttonStyle,
    buttonSize
}) =>{

    const checkStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

    const checkSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    return(
        <Link to={loc} className=''>
            <button
                className={`${checkStyle} ${checkSize}`}
                onClick={onClick}>
                {children}
            </button>
        </Link>
    );
};