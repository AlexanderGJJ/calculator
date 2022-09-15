import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(app);
