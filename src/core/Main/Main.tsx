import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../Login/Login';
import { TasksPage } from '../TasksPage/TasksPage';
import { CodeField } from '../CodeField/CodeField';

import { useTasksStore } from '../../store/tasksStore';

import s from './Main.module.scss';
import { Info } from '../Info/Info';
import { CheckCode } from '../CheckCode/CheckCode';

export const Main = () => {
  const currentTask = useTasksStore((state) => state.currentTask);
  return (
    <div className={s.container}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path={`/task/${currentTask}`} element={<CodeField />} />
        <Route path="/check_code" element={<CheckCode />} />
        <Route path="/" element={<Info />} />
      </Routes>
    </div>
  );
};
