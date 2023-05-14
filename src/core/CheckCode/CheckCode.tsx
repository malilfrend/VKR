/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Button } from '@mui/joy';

import s from './CheckCode.module.scss';
import { SpecialTask } from '../SpecialTask/SpecialTask';

const tasks = [
  {
    name: 'led',
    condition: `Управление портами ввода вывода в режиме вывода на примере мигания светодиодами. \n 
      Необходимо запрограммировать МК таким образом, чтобы он мог принять последовательность порядковых номеров светодиодов и поочерёдно их зажигать.
    `,
  },
  {
    name: 'indicators',
    condition: `Управление портами ввода вывода в режиме вывода на примере семисегментного индикатора.
    Необходимо написать такую программу, которая будет выводить на индикаторе символ A`,
  },
];
export const CheckCode = () => {
  const [code, setCode] = useState('');
  const [isHide, setIsHide] = useState(true);
  const [ledOrIndecator, setLedOrIndicator] = useState('');
  const onTaskClick = (name: string) => {
    setLedOrIndicator(name);
    if (isHide) {
      setIsHide(false);
    }
    if (!isHide && name === ledOrIndecator) {
      setIsHide(true);
      setLedOrIndicator('');
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.taskWrapper}>
        <div
          className={`${s.task} ${ledOrIndecator === 'led' && !isHide ? s.darkBg : ''}`}
          onClick={() => onTaskClick('led')}
        >
          Светодиоды
        </div>
        <div
          className={`${s.task} ${ledOrIndecator === 'indicators' && !isHide ? s.darkBg : ''}`}
          onClick={() => onTaskClick('indicators')}
        >
          Семисегментный индикатор
        </div>
        <div className={`${s.taskConditions} ${isHide ? s.hide : ''}`}>
          <p>Условие задачи</p>
          <div>{ledOrIndecator === 'led' ? tasks[0].condition : tasks[1].condition}</div>
        </div>
      </div>
      <div className={s.wrap}>
        <div className={s.codeWrap}>
          <CodeEditor
            value={code}
            onChange={(env) => {
              setCode(env.target.value);
            }}
            language="c"
            placeholder="Введите вашу программу"
            padding={16}
            minHeight={300}
            style={{
              fontSize: 16,
            }}
            data-color-mode="light"
            className={s.codeEditor}
          />
          <Button variant="soft" className={s.btn}>
            Отправить на проверку
          </Button>
        </div>
        <div className={s.resultOfTesting}>
          <h4>Результат работы программы</h4>
          {ledOrIndecator === 'led' ? <SpecialTask /> : null}
        </div>
      </div>
    </div>
  );
};
