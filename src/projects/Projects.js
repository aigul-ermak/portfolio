import React from 'react';
import style from './Projects.module.css';
import ProjectItem from './projectItem/ProjectItem';
import styleContainer from '../common/styles/Container.module.css';


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.projectsTitle}>My projects</h2>
                <div className={style.projectItem}>
                    <ProjectItem
                        title={"It-kamasutra"}
                              description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorem. "}/>
                    <ProjectItem
                        title={"It-incubator"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorem."}/>
                </div>
            </div>

        </div>

    )
}


export default Projects;
