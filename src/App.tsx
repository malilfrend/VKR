import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './core/Header/Header';
import { MainPage } from './core/MainPage/MainPage';

import './styles/index.scss';
import { Login } from './core/Login/Login';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='container'>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
