import React from 'react';
import style from './Remote.module.css';
import styleContainer from '../common/styles/Container.module.css';


const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <div>
                    <h2 className={style.remoteTitle}>I'm considering a remote job</h2>
                </div>
                <div>
                    <button className={style.button}>Hire me</button>
                </div>
            </div>


        </div>
    )
}


export default Remote;
