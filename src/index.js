import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import store from './store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementsByTagName('body')[0]);
root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
