// import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AuthContextProvider, GlobalModal } from './context';
import { ErrorBoundary } from './pages/Error';

import './styles.scss';
import { store } from './store/store';

const app = (
  <ErrorBoundary>
    <Provider store={store}>
      <AuthContextProvider>
        <GlobalModal>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GlobalModal>
      </AuthContextProvider>
    </Provider>
  </ErrorBoundary>
);

ReactDOM.render(app, document.getElementById('root'));
