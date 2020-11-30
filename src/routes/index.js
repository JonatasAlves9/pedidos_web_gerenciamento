import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './Route';

export default function Routes() {
  
  return (
    <BrowserRouter>
      <Switch>
       {/* <Route path="/" exact component={Dashboard} isPrivate/>*/ }
      
      </Switch>
    </BrowserRouter>
  );
}
