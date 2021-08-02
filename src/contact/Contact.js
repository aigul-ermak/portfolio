import React from 'react';
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';


const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>

                    <div>
                        <h2 className={style.contactTitle}>Contacts</h2>
                    </div>
                    <form className={style.contactForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name=""/>
                    </form>
                    <a className={style.button} href="#">Send</a>
                </div>

        </div>
    )
}


export default Contact;
