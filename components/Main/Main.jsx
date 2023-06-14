import React from 'react';
import s from './Main.module.scss'
import Card from '../Card/Card';

const Main = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.header}>
                    <img src="/logo.png" alt="logo" />
                    <div className={s.title}>
                        <h1>Никнейм</h1>
                        <div className={s.path}>
                            <h2>Расслабление, оздоровление, блаженство.</h2>
                        </div>
                    </div>
                </div>
                <Card />
            </div>
        </div>
    );
};

export default Main;