import React from 'react';
import './Project.css';
import { Button } from './Button.jsx'

const Project = (props) =>{

    const goTo = (url) =>{
        window.open(url,'_blank')
    }

    return(
    <div className='proj'>
        <img className='proj__app' src={props.appImg} alt='app-img' />
        <div className='proj__container'>
            <div className='proj__appName'>{props.app}</div>
            <div className='proj__appInfo'>{props.appInfo}</div>
            <div className='proj__buttons'>
                <Button 
                    className='proj__btn' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--desktop--smaller'
                    onClick={()=>goTo(props.onClickGit)}
                    > GitHub </Button>
                <Button 
                    className='proj__btn' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--desktop--smaller'
                    onClick={()=>goTo(props.onClickLive)}
                    > Live URL</Button>
            </div>
        </div>
    </div>
    
    )
}

export default Project