import React, { useState } from 'react';
import { Button } from '@mui/joy';
import s from './Indicators.module.scss';

const indicators = [1, 2, 3, 4, 5, 6, 7];
const indicatorsOrder = [2, 4, 1, 3, 5, 7, 6];

export const Indicators = () => {
  const [currentIndicator, setCurrentIndicator] = useState(0);
  // eslint-disable-next-line consistent-return
  const setNewLed = (order: number[], i = 0) => {
    if (order.length === i) {
      return null;
    }
    setCurrentIndicator(order[i]);
    setTimeout(() => {
      setNewLed(order, i + 1);
    }, 1000);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.indicatorsGroup}>
        {indicators.map((indicator) => (
          <div className={`${s.indicator} ${currentIndicator === indicator ? s.active : ''}`} key={indicator}>
            {indicator}
          </div>
        ))}
      </div>
      <Button
        variant="soft"
        className={s.btn}
        type="button"
        color="success"
        onClick={() => {
          setNewLed(indicatorsOrder);
        }}
      >
        Пуск
      </Button>
    </div>
  );
};
