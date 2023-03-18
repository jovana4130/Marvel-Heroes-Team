import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='container'>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={ MainPage } />
          <Route exact path='/infopage/:id' component={ InfoPage } />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;