// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Layout } from '../components/Layout';
import { Page } from '../components/Layout/part/Page';

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="*" component={Page} />
      </Switch>
    </BrowserRouter>
  );
};
