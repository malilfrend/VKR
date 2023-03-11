import React from 'react';
import s from './Header.module.scss';
import { useAuthStore } from '../../store/authStore';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { isAuth, name, lastName, group } = useAuthStore((state) => state);
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h4>Кафедра ЭПУ</h4>
        <div>
          {
            isAuth ?
              <div className={s.userInfo}>
                <p>{name} {lastName}</p>
                <p>{group}</p>
              </div>
              :
              <NavLink to={'/login'}>Войти</NavLink>
          }
        </div>
      </div>
    </div>
  );
};
