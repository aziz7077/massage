import React from 'react';
import s from './Header.module.scss'
import Link from 'next/link';

const Header = ({title}) => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <img src="/logo.png" alt="logo" />
                <div className={s.title}>
                    <Link href='/'>Главная</Link>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;