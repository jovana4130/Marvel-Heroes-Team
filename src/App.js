import React from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { MainPage } from './components/MainPage/MainPage';
import { Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
        <Header>Hero Team</Header>
            <MainPage>
                <Route exact path='/' component={ MainPage } />
            </MainPage>
        <Footer />
    </div>
  );
};

export default App;