import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import StickyFooter from 'react-sticky-footer';
const electron = require('electron');
const ipc = electron.ipcMain;
const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
   
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
