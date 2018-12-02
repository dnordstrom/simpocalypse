import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TownPage from './containers/TownPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.TOWN} component={TownPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
