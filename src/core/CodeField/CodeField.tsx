import React, { useState } from 'react';

import Button from '@mui/joy/Button';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { useTasksStore } from '../../store/tasksStore';

import s from './CodeField.module.scss';
//TODO интеграция логов ошибок с сервера
export const CodeField = () => {
  const currentTask = useTasksStore((state) => state.getCurrentTask());
  // eslint-disable-next-line no-useless-concat
  const [code, setCode] = useState('def myFunc() {\n' + '  print("Hello world")\n' + '}');

  return (
    <div className={s.wrapper}>
      <div className={s.task}>
        <h4>{currentTask?.title}</h4>
        <p>{currentTask?.description}</p>
      </div>
      <div className={s.codeEditor}>
        <CodeEditor
          value={code}
          onChange={(env) => {
            setCode(env.target.value);
          }}
          language="python"
          placeholder="Please enter your code"
          padding={16}
          minHeight={300}
          style={{
            fontSize: 16,
          }}
          data-color-mode="light"
        />
        <Button variant="soft" className={s.btn}>
          Отправить на проверку
        </Button>
      </div>
      <div className={s.resultOfTesting}>
        <h4>Результат тестирования</h4>
      </div>
    </div>
  );
};
