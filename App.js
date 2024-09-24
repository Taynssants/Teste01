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
                <Switch>
                    <Route path="/produtos" component={Produtos} />
                    <Route path="/cria-produto" component={CriaProduto} />
                    <Route path="/selecionados" component={Selecionados} />
                    <Route path="/" exact>
                        <h1>Bem-vindo ao Meu App!</h1> {/* Rota padrão */}
                    </Route>
                    <Route path="*">
                        <h2>Página não encontrada!</h2> {/* Rota para páginas não definidas */}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

