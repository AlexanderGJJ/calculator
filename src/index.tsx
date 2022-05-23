import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AuthContextProvider } from './context/AuthContext';

import './styles.css';
import { store } from './store/store';

const app = (
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
