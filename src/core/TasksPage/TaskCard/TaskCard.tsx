import React from 'react';
import s from './TaskCard.module.scss';
import { TTask } from './../../../types/TaskTypes';
import { NavLink } from 'react-router-dom';

export const TaskCard: React.FC<TTask & { setCurrentTask: (id: number) => void }> =
  ({ setCurrentTask, title, description, id }) => {
    return (
      <NavLink to={`/task/${id}`} className={s.wrapper} onClick={() => setCurrentTask(id)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </NavLink>
    );
  };