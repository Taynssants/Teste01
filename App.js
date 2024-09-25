// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Produtos from './components/Produtos';
import CriaProduto from './components/CriaProduto';
import Selecionados from './components/Selecionados';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <Menu /> {/* Incluindo o Menu */}
            <div className="container mt-3"> {/* Container para melhor espaçamento */}
                    <Route path="/produtos" component={Produtos} />
                    <Route path="/cria-produto" component={CriaProduto} />
                    <Route path="/selecionados" component={Selecionados} />
                    <Route path="/" exact>
                    </Route>
            </div>
        </Router>
    );
};

export default App;

