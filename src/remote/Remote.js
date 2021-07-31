import React from 'react';
import style from './Remote.module.css';


const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={style.container}>
                <div>
                    <h2 className={style.title}>I'm considering a remote job</h2>
                </div>
                <div>
                    <button className={style.button}>Hire me</button>
                </div>
            </div>


        </div>
    )
}


export default Remote;
