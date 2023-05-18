import React from 'react';
import RecentProj from '../RecentProj';
import MyProjects from '../MyProjects';

const Projects = (props) =>{
    return(
        <>
            <MyProjects />
            <RecentProj moreProjectsBtn={props.false} />
        </>
    )
}

export default Projects
