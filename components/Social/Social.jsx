import React from 'react';
import s from './Social.module.scss'

const Social = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <h1>Мои социальные сети:</h1>
                <ul>
                    <li>
                        <a href="#">WhatsApp</a>
                    </li>
                    <li>
                        <a href="#">Youtube</a>
                    </li>
                    <li>
                        <a href="#">Telegram</a>
                    </li>
                    <li>
                        <a href="#">Tik Tok</a>
                    </li>
                    <li>
                        <a href="#">VK</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Social;