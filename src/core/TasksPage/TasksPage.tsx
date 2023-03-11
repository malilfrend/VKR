import React from 'react';

import { TaskCard } from './TaskCard/TaskCard';

import s from './TasksPage.module.scss';

import { useTasksStore } from '../../store/tasksStore';

export const TasksPage = () => {
  const { tasks, setCurrentTask } = useTasksStore((state) => state);

  return (
    <div className={s.wrapper}>
      <div className={s.listOfTasks}>
        {tasks.map((item) => {
          return (
            <TaskCard {...{ setCurrentTask, ...item }} key={item.id} />
          );
        })}
      </div>
    </div>
  );
};
