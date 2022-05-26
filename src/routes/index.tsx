// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Layout } from '../components/Layout';

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="*">
          <h1>Pagina não existe</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
