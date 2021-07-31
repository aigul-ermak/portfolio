import React from 'react';
import style from './Itemwork.module.css';


const ItemWork = (props) => {
    return (
        <div className={style.itemWork}>
            <div className={style.image}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
                    alt=""/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}


export default ItemWork;
