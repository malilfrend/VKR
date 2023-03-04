import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Header} from "./core/Header/Header";

import './styles/index.scss';
import {MainPage} from "./core/MainPage/MainPage";

function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <main className='container'>
                <Routes>
                    <Route path={'/login'} element={<div>auth</div>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
