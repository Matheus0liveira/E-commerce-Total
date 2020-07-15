import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Shopping from './Pages/Shopping'
import Cart from './Pages/Cart'
import Header from './Components/Header'
function Routes() {
  return (
    <BrowserRouter >

      <Header />
      <Route exact path='/' component={Shopping} />
      <Route path='/cart' component={Cart} />

    </BrowserRouter  >
  );
}

export default Routes;