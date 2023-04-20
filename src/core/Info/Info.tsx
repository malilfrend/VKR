import React from 'react';

import s from './Info.module.scss';

export const Info = () => (
  <div className={s.wrapper}>
    <h3>
      Данный сервис предназначен для проверки кода микроконтроллеров
      <br />и решения алгоритмических задач на языке программирования Python.
    </h3>
    <section>
      <h4>Правила пользования</h4>
      <ul>
        <li>Чтобы решать задачи нужно авторизироваться на странице /login</li>
        <li>Проверить код для микроконтроллера можно без авторизации</li>
      </ul>
    </section>
  </div>
);
