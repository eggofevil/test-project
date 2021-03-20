import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import TestComponent from '../test-component/test-component.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/test" component={TestComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
