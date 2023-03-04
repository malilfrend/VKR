import React from 'react';
import { useTasksStore } from '../../../store/tasksStore';

export const CodeField = () => {
  const currentTask = useTasksStore((state) => state.getCurrentTask());
  return (
    <div>
      <h4>{currentTask?.title}</h4>
      <div>{currentTask?.description}</div>
      <div>CodeSandBox</div>
    </div>
  );
};
