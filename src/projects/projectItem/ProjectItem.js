import React from 'react';
import style from './ProjectItem.module.css';


const ProjectItem = (props) => {
    return (
        <div className={style.projectItem}>
            <div className={style.projectImage}>
                <a href="#">Look here</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.projectDescription}>{props.description}</span>
        </div>
    )
}


export default ProjectItem;
