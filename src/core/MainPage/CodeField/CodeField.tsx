import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useTasksStore } from '../../../store/tasksStore';

export const CodeField = () => {
  const currentTask = useTasksStore((state) => state.getCurrentTask());
  const [code, setCode] = useState('function add(a, b) {\n  return a + b;\n}')
  return (
    <div>
      <h4>{currentTask?.title}</h4>
      <p>{currentTask?.description}</p>
      <div>
        <CodeEditor
          value={code}
          onChange={(env) => setCode(env.target.value)}
          language='python'
          placeholder='Please enter your python code'
          padding={15}
          minHeight={500}
          style={{
            fontSize: 20
          }}
        />
      </div>
    </div>
  );
};
