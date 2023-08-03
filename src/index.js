/* istanbul ignore file */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './scss/index.scss';

import { store } from './store';
import App from './components/App';

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('frtess-root'));
