import React from 'react';
import './App.css';
import { Header } from './components/Header/Header.js'
import { MainPage } from './components/MainPage/MainPage.js';
//import { Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer.js';
//import { SearchInput } from './components/SearchInput'

function App() {
  return (
    <div className='App'>
        <Header/>
        <div className='search-input'></div>
        <MainPage/>
        <Footer/>
    </div>
  );
};

export default App;



//<SearchInput></SearchInput>
//<Route exact path='/' component={ MainPage } />