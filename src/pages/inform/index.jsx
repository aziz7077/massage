import React from 'react';
import s from './inform.module.scss'
import Header from '../../../components/Header/Header';
import SlideSertif from '../../../components/SlideSertif/SlideSertif';
import Social from '../../../components/Social/Social';

const inform = () => {
    return (
        <>
            <Header title='Информация обо мне и отзывы' />
            <div className={s.container}>
                <div className={s.content}>
                    <img className={s.profil} src="/ava.jpg" alt="profil" />
                    <SlideSertif />
                    <div className={s.title}>
                        <h1>Фио</h1>
                        <h2>должность и достижения</h2>
                    </div>
                    <Social/>
                </div>
            </div>
        </>

    );
};

export default inform;