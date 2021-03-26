import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './main/main.jsx';
import Room from './room/room.jsx';

import TestComponent from './test-component/test-component-2.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/offer:id" render={(serviceProps) => (<Room state={serviceProps.location.state} />)} />
        <Route exact path="/test">
          <TestComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
