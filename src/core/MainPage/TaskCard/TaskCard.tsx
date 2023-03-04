import React from 'react';
import s from './TaskCard.module.scss';
import { TTask } from './../../../types/TaskTypes';
import { useTasksStore } from '../../../store/tasksStore';

export const TaskCard: React.FC<TTask & { setCurrentTask: (id: number) => void }> =
  ({ setCurrentTask, title, description, id }) => {
    return (
      <div className={s.wrapper} onClick={() => setCurrentTask(id)}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    );
  };