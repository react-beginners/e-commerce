import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Signin from './components/sign-in/sign-in.component';

import PageNotFound from './pages/404/pageNotFound';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/shop/:category' component={ShopPage} />
        <Route exact path='/shop'component={ShopPage} />
        <Route exact path='/signin'component={Signin} />
        <Route  exact path='/' component={HomePage} />
        <Route  path='*' component={PageNotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
