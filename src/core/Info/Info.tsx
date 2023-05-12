import React from 'react';

import s from './Info.module.scss';

export const Info = () => (
  <div className={s.wrapper}>
    <h3>
      Данный сервис предназначен для проверки кода микроконтроллеров
      <br />и решения алгоритмических задач на языке программирования Python.
    </h3>
    <section className={s.rules}>
      <p>Правила пользования:</p>
      <div className={s.listOfRules}>
        <p>Чтобы решать задачи нужно авторизироваться на странице /login.</p>
        <p>Проверить код для микроконтроллера можно без авторизации.</p>
      </div>
    </section>
  </div>
);
