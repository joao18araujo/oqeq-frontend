import React from 'react';
import { Provider } from 'react-redux';
import Navigator from '~navigations';
import store from '~store';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
