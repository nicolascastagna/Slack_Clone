import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appReducer from './app/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appReducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
