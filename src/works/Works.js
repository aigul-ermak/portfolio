import React from 'react';
import style from './Works.module.css';
import ItemWork from './workItem/Itemwork';
import styleContainer from '../common/styles/Container.module.css';


const Works = () => {
    return (
        <div className={style.Works}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.worksItem}>
                    <ItemWork
                        title={"It-kamasutra"}
                              description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorem. "}/>
                    <ItemWork
                        title={"It-incubator"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorem."}/>
                </div>
            </div>

        </div>

    )
}


export default Works;
