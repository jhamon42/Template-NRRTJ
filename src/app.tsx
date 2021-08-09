import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './Stores/index';
import { GlobalRoutes } from './Routes/global';

function app() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>{GlobalRoutes}</Switch>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default app;
