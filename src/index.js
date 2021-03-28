import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CustomProvider } from "./app/StateHandler";

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
