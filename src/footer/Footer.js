import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.footerTitle}>Aigul Ermak</h2>
                <div className={style.footerSocial}>
                    <div>Fb</div>
                    <div>Lin</div>
                    <div>Insta</div>
                    <div>Tw</div>
                </div>
                <h4 className={style.footerRights}>All rights reserved</h4>

            </div>
        </div>
    )
}


export default Footer;
