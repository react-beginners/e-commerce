import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' component={HomePage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
