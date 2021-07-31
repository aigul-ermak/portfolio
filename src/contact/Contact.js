import React from 'react';
import style from './Contact.module.css';
import Form from './form/Form';

const Contact = () => {
    return (
        <div className={style.mainContact}>
            <div className={style.container}>
                <div>
                    <h2 className={style.title}>Contacts</h2>
                    <div>
                        <Form />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;
