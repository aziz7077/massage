import React from 'react';
import s from './Card.module.scss'
import Social from '../Social/Social';
import Link from 'next/link';

const Card = () => {
    const cards = [
        {
            id: 1,
            title: 'Информация обо мне и отзывы'
        },
        {
            id: 2,
            title: 'Запись на прием / онлайн-консультацию'
        },
        {
            id: 3,
            title: 'Обучающие видеоуроки по массажу и мануальной терапии'
        },
        {
            id: 4,
            title: 'Видеокомплексы лечебных упражнений'
        },
    ]

    return (
        <div className={s.container}>
            <div className={s.content}>
                {
                    cards.map((card) => (
                        <div className={s.card}>
                            <h1>{card.title}</h1>
                            <Link className={s.btn} href='/inform'>ПОДРОБНЕЕ</Link>
                        </div>
                    ))
                }
                <div className={s.social}>
                    <Social />
                </div>
            </div>
        </div>
    );
};

export default Card;