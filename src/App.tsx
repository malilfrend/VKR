import React from 'react';

import { Header } from './core/Header/Header';
import { Main } from './core/Main/Main';

import './styles/index.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}
export default App;
