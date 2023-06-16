import React from 'react';
import s from './exercises.module.scss'
import Header from '../../../components/Header/Header';
import Link from 'next/link';



const exercises = () => {
    return (
        <>
            <Header title="Видеокомплексы лечебных упражнений" />
            <div className={s.container}>
                <div className={s.content}>
                    <Link className={s.title} href="">Упражнение для лиц старше 60 лет  </Link>
                    <Link className={s.title} href='' >Суставная гимнастика для верхних конечностей и плечевого пояса</Link>
                    <Link className={s.title} href='' >Дыхательные упражнения и упражнения на релаксацию</Link>
                    <Link className={s.title} href='' >Координационно-двигательные упражнения</Link>
                    <Link className={s.title} href='' >Разминка</Link>
                    <Link className={s.title} href='' >Комплекс суставной гимнастики для позвоночника и нижних конечностей</Link>
                    <Link className={s.title} href='' >Отделение гериатрической реабилитации</Link>
                </div>
            </div>
        </>

    );
};

export default exercises;