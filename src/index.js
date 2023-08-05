/* istanbul ignore file */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'normalize.css';
import './scss/index.scss';

import { store, persistor } from './store';
import App from './components/App';

const jsx = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('frtess-root'));
