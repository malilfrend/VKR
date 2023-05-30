import React, { useState } from 'react';
import { Button } from '@mui/joy';
import s from './SpecialTask.module.scss';

const ledsOrder = [0, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0];
const leds = [0, 1, 2, 3, 4, 5, 6, 7];

export const SpecialTask = () => {
  const [currentLed, setCurrentLed] = useState(-1);
  // eslint-disable-next-line consistent-return
  const setNewLed = (order: number[], i = 0) => {
    if (order.length === i) {
      return null;
    }
    setCurrentLed(order[i]);
    setTimeout(() => {
      setNewLed(order, i + 1);
    }, 1000);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.led_group}>
        {leds.map((led) => (
          <div className={`${s.led} ${currentLed === led ? s.active : ''}`} key={led}>
            {led}
          </div>
        ))}
      </div>
      <Button
        variant="soft"
        className={s.btn}
        type="button"
        color="success"
        onClick={() => {
          setNewLed(ledsOrder);
        }}
      >
        Пуск
      </Button>
    </div>
  );
};
