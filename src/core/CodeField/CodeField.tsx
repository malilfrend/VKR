import React, { useState } from 'react';

import Button from '@mui/joy/Button';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { useTasksStore } from '../../store/tasksStore';

import s from './CodeField.module.scss';
import { isCheckCode } from '../../hoc/isCheckCode';
//@ts-expect-error
export const CodeField = (params) => {
  console.log(params);

  const currentTask = useTasksStore((state) => state.getCurrentTask());
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
          onChange={(env) => { setCode(env.target.value); }}
          language="python"
          placeholder="Please enter your code"
          padding={15}
          minHeight={300}
          style={{
            fontSize: 16,
          }}
        />
        <Button variant="soft">Отправить на проверку</Button>
      </div>
    </div>
  );
};

export const CodeFieldComp = isCheckCode(CodeField);

// import React from 'react';
// import { useParams } from 'react-router-dom';

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let { userId } = useParams();
//     return <Component {...props} userId={userId} />;
//   }

//   return ComponentWithRouterProp;
// }

// export default withRouter;
