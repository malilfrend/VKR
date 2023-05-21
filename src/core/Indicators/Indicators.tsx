import React, { useState } from 'react';
import { Button } from '@mui/joy';
import s from './Indicators.module.scss';

const indicators = ['a', 'f', 'b', 'g', 'e', 'c', 'd'];

const indicatorsMap = new Map([
  ['a', true],
  ['b', true],
  ['c', true],
  ['d', false],
  ['e', true],
  ['f', true],
  ['g', true],
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
