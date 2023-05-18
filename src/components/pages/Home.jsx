import React from 'react'
import Hero from '../Hero.jsx';
import RecentProj from '../RecentProj.jsx'

const Home = () =>{
    return(
        <>
            <Hero />
            <RecentProj>Recent <span>Projects</span></RecentProj>
        </>
    )
}

export default Home