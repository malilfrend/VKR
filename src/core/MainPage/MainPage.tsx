import React from 'react';
import { TaskCard } from './TaskCard/TaskCard';
import { CodeField } from './CodeField/CodeField';
import s from './MainPage.module.scss';
import { useTasksStore } from '../../store/tasksStore';

export const MainPage = () => {
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
      <CodeField />
    </div>
  );
};
