import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage';
import { Route } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='container'>
        
          <Route exact path='/' component={ MainPage } />
          <Route exact path='/infopage/:id' component={ InfoPage } />
        
      <Footer />
    </div>
  );
};

export default App;