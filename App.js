import React from 'react';
import Routes from './stack/Routes';
import {Provider} from 'react-redux';
import {Store} from './Redux/store';

const App = props => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
