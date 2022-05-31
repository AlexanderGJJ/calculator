import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AuthContextProvider } from './context/AuthContext';
import { GlobalModal } from './context/ModalContext';

import './styles.scss';
import { store } from './store/store';

const app = (
  <Provider store={store}>
    <AuthContextProvider>
      <GlobalModal>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalModal>
    </AuthContextProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
