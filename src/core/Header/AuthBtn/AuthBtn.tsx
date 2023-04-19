import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../../store/authStore';
import s from './AuthBtn.module.scss';

export const AuthBtn = () => {
  const { isAuth, name, lastName, group } = useAuthStore((state) => state);
  return (
    <div>
      {isAuth ? (
        <div>
          <p>
            {name} {lastName}
          </p>
          <p>{group}</p>
        </div>
      ) : (
        <NavLink to="/login" className={s.toLogin}>
          Войти
        </NavLink>
      )}
    </div>
  );
};
