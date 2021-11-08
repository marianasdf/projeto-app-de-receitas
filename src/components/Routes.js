import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ LoginPage } />
      </Switch>
    );
  }
}

export default Routes;
