import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useTasksStore } from '../../../store/tasksStore';
import s from './CodeField.module.scss';

export const CodeField = () => {
  const currentTask = useTasksStore((state) => state.getCurrentTask());
  const currentTaskId = useTasksStore((state) => state.currentTask);
  const [code, setCode] = useState('def myFunc() {\n' +
    '  print("Hello world")\n' +
    '}');
  return (
    currentTaskId
      ?
      <div>
        <h4>{currentTask?.title}</h4>
        <p>{currentTask?.description}</p>
        <div className={s.codeEditor}>
          <CodeEditor
            value={code}
            onChange={(env) => setCode(env.target.value)}
            language='python'
            placeholder='Please enter your python code'
            padding={15}
            minHeight={300}
            style={{
              fontSize: 16,
            }}
          />
          <Button variant='contained'>
            Отправить на проверку
          </Button>
        </div>
      </div>
      :
      null
  );
};
