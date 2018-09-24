import React from 'react';
import Navigator from './config/routes';
import { Provider } from 'react-redux';
import store from './config/store';

export default () => (
    <Provider store={store}>

        <Navigator />
    </Provider>

);
