import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Button } from '@mui/joy';

import s from './CheckCode.module.scss';

export const CheckCode = () => {
  const [code, setCode] = useState('');
  return (
    <div className={s.wrapper}>
      <CodeEditor
        value={code}
        onChange={(env) => {
          setCode(env.target.value);
        }}
        language="c"
        placeholder="Please enter your code"
        padding={16}
        minHeight={300}
        style={{
          fontSize: 16,
        }}
        data-color-mode="light"
        className={s.codeEditor}
      />
      <Button variant="soft">Отправить на проверку</Button>
    </div>
  );
};
