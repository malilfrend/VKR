import React from 'react';
import s from './Header.module.scss';
import { Tabs } from './Tabs/Tabs';
import { AuthBtn } from './AuthBtn/AuthBtn';

export const Header = () => (
  <div className={s.wrapper}>
    <div className={s.container}>
      <h4>Кафедра ЭПУ</h4>
      <Tabs />
      <AuthBtn />
    </div>
  </div>
);
