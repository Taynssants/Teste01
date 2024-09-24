// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'; // Importando o HashRouter
import store from './redux/store'; // Importando a store do Redux
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o Bootstrap

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
