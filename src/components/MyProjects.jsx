import React from 'react';
import './MyProjects.css';

const MyProjects = () =>{

    const descript = 'I have worked on several projects lately. These projects have taught me a lot about web development, user experience, and design. I am eager to continue learning and taking on new challenges in the field.'

    return(
        <div className='myProjects'>
            <div className='myProjects__title' > My <span>Projects</span> </div>
            <div className='myProjects__desc'>{descript}</div>
        </div>
    )
}

export default MyProjects