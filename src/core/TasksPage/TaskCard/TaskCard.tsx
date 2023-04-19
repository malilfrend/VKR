import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './TaskCard.module.scss';
import { TTask } from '../../../types/TaskTypes';

export const TaskCard: React.FC<TTask & { setCurrentTask: (id: number) => void }> = ({
  setCurrentTask,
  title,
  description,
  id,
}) => (
  <NavLink to={`/task/${id}`} className={s.wrapper} onClick={() => setCurrentTask(id)}>
    <h4>{title}</h4>
    <p>{description}</p>
  </NavLink>
);
