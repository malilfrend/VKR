import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Tabs.module.scss';
import { tabs } from './tabsArr';

export const Tabs = () => (
  <div className={s.tabs}>
    {tabs.map((tab) => (
      <NavLink to={`/${tab.url}`} key={tab.name} className={({ isActive }) => (isActive ? `${s.active}` : '')}>
        {tab.name}
      </NavLink>
    ))}
  </div>
);
