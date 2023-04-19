import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../Login/Login';
import { TasksPage } from '../TasksPage/TasksPage';
import { CodeFieldComp } from '../CodeField/CodeField';

import { useTasksStore } from '../../store/tasksStore';

import s from './Main.module.scss';

export const Main = () => {
  const currentTask = useTasksStore((state) => state.currentTask);
  return (
    <div className={s.container}>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/tasks'} element={<TasksPage />} />
        <Route path={`/task/${currentTask}`} element={<CodeFieldComp />} />
        <Route path={'/check_code'} element={<CodeFieldComp />} />
      </Routes>
    </div>
  );
};
