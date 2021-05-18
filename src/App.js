import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import PageNotFound from './pages/404/pageNotFound';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/shop'><ShopPage /></Route>
        <Route  exact path='/'><HomePage /></Route>
        <Route  path='*' component={PageNotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
