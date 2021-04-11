import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';

render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('app'));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
