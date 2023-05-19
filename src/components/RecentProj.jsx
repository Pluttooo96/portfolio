
import React, { useState, useEffect } from 'react';
import './RecentProj.css';
import { Button } from './Button.jsx'
import Project from './Project.jsx'
import { useLocation } from 'react-router-dom';
import data from "../data/data.json";
import app1 from './images/advice-app.png';
import app2 from './images/order-summary-card.png';
import app3 from './images/insure-landing-page.png';
import app4 from './images/rating-app.png';
import dArrowR from './images/dark-arrow-right.svg';
import lArrowR from './images/light-arrow-right.svg';
import dArrowL from './images/dark-arrow-left.svg';
import lArrowL from './images/light-arrow-left.svg';


const RecentProj = ({children}) =>{

    const [num, setNum] = useState(0);
    const [mobile, setMobile] = useState(true)
    const location = useLocation()

    const mobileProj = () => {
        if (window.innerWidth > 960) {
            setMobile(false);     
          } else {
            setMobile(true);
          }
        };

    useEffect(() => {
        mobileProj();
      }, []);

    window.addEventListener('resize', mobileProj);

    
    const clickRight = () => {
        if (num<data.length-2){
            setNum(num+1)
        }

    }
    const clickLeft = () => {
        if (num>0){
            setNum(num-1)
        }

    }
    

    const arrowRight = [dArrowR,lArrowR]
    const arrowLeft = [dArrowL,lArrowL]
    const mobileAppImg = [app1, app2, app3, app4]
    

    return(
        <div className='recProj'>
            <div className='recProj__title'> {children} </div>
            {mobile && 
            <>
            <img className='recProj__app' src={mobileAppImg[num]} alt='app-img' />
            <div className='recProj__appName'>{data[num].appName}</div>
            <div className='recProj__info'>
                <img className='recProj__rArrow' src={num!==0 ? arrowLeft[0] : arrowLeft[1]} alt='arrow-left' onClick={clickLeft} /> 
                <div className='recProj__appInfo'>{data[num].appInfo}</div>
                <img className='recProj__lArrow' src={num!==data.length-2 ? arrowRight[0] : arrowRight[1]} alt='arrow-right' onClick={clickRight}/>
            </div>
            <Button
                className = 'recProj__btn' 
                buttonStyle='btn--outline' 
                buttonSize='btn--mobile--smaller'
                onClick={()=>window.open(data[num].gitHub,'_blank')}
            >GitHub</Button>
            <Button 
                buttonStyle='btn--outline' 
                buttonSize='btn--mobile--smaller'
                onClick={()=>window.open(data[num].liveURL,'_blank')}
            >Live URL</Button>
            </>}
            {!mobile &&
            <div className='recProj__desktop'>
                <Project 
                        appImg={app1} 
                        app={data[0].appName} 
                        appInfo={data[0].appInfo} 
                        onClickGit={data[0].gitHub}  
                        onClickLive={data[0].liveURL} />
                <Project 
                        appImg={app2}
                        app={data[1].appName}
                        appInfo={data[1].appInfo}
                        onClickGit={data[1].gitHub}
                        onClickLive={data[1].liveURL} />
                <Project 
                        appImg={app3} 
                        app={data[2].appName} 
                        appInfo={data[2].appInfo} 
                        onClickGit={data[2].gitHub}  
                        onClickLive={data[2].liveURL} />
                {location.pathname === '/projects' ? 
                <Project
                        appImg={app4} 
                        app={data[3].appName} 
                        appInfo={data[3].appInfo} 
                        onClickGit={data[3].gitHub}  
                        onClickLive={data[3].liveURL} /> : null }
            </div>}
            { location.pathname !== '/projects' ? 
            <Button 
                buttonStyle='btn--main' 
                buttonSize='btn--mobile--bigger'
                loc='/projects'
            >More projects</Button> : null}
        </div>
    )

}

export default RecentProj;