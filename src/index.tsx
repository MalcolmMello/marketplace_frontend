import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Routes>
            <App />
          </Routes>
      </Provider>
  </React.StrictMode>
);