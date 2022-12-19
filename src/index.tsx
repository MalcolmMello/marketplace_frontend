import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import { AuthProvider } from './contexts/AuthProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
          <Routes>
            <App />
          </Routes>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);