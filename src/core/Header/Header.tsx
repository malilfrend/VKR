import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { useAuthStore } from '../../store/authStore';
import { tabs } from './tabs/tabs';

export const Header = () => {
  const { isAuth, name, lastName, group } = useAuthStore((state) => state);
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h4>Кафедра ЭПУ</h4>
        <div className={s.tabs}>
          {tabs.map((tab) => (
            <NavLink to={`/${tab.url}`} key={tab.name}>
              {tab.name}
            </NavLink>
          ))}
        </div>
        <div>
          {isAuth ? (
            <div className={s.userInfo}>
              <p>
                {name} {lastName}
              </p>
              <p>{group}</p>
            </div>
          ) : (
            <NavLink to="/login">Войти</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
