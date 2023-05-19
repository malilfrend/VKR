import React, { useState } from 'react';
import { Button } from '@mui/joy';
import s from './Indicators.module.scss';

const indicators = [1, 2, 3, 4, 5, 6, 7];

const indicatorsMap = new Map([
  [1, true],
  [2, true],
  [3, true],
  [4, true],
  [5, true],
  [6, true],
  [7, false],
]);

export const Indicators = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.indicatorsGroup}>
        {indicators.map((indicator) => (
          <div className={`${s.indicator} ${indicatorsMap.get(indicator) && play ? s.active : ''}`} key={indicator}>
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
          setPlay(!play);
        }}
      >
        Пуск
      </Button>
    </div>
  );
};
